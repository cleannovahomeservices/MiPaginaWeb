/**
 * Chatbot webhook client for n8n.
 * Single source of truth for URL, session handling, and response parsing.
 */

export const WEBHOOK_URL =
  "https://n8n-n8n.3asuar.easypanel.host/webhook/bcfd9857-a1cf-43fc-be6c-b8a22b300264/chat";

let cachedSessionId: string | null = null;

function generateSessionId() {
  if (
    typeof crypto !== "undefined" &&
    typeof (crypto as Crypto).randomUUID === "function"
  ) {
    return (crypto as Crypto).randomUUID();
  }
  return `sess-${Date.now()}-${Math.random().toString(36).slice(2, 10)}`;
}

function getSessionId(): string {
  if (cachedSessionId) return cachedSessionId;

  try {
    if (typeof window !== "undefined" && window.localStorage) {
      const stored = window.localStorage.getItem("apiora_chat_session_id");
      if (stored) {
        cachedSessionId = stored;
        return cachedSessionId;
      }
      const created = generateSessionId();
      window.localStorage.setItem("apiora_chat_session_id", created);
      cachedSessionId = created;
      return cachedSessionId;
    }
  } catch {
    // ignore storage errors and fall back to in-memory id
  }

  cachedSessionId = generateSessionId();
  return cachedSessionId;
}

/**
 * Extracts a human-readable reply from arbitrary webhook data.
 * Tolerant to different n8n structures.
 */
export function extractReply(data: unknown): string {
  if (data == null) return "";

  if (typeof data === "string") {
    return data.trim();
  }

  if (Array.isArray(data)) {
    if (data.length === 0) return "";
    const first = data[0] as any;
    if (first && typeof first === "object" && "json" in first) {
      const fromJson = extractReply(first.json);
      if (fromJson) return fromJson;
    }
    return extractReply(first);
  }

  if (typeof data === "object") {
    const obj = data as any;

    const primaryKeys = ["output", "reply", "text", "message", "response", "answer"] as const;
    for (const key of primaryKeys) {
      if (obj[key] != null) {
        const value = extractReply(obj[key]);
        if (value) return value;
      }
    }

    if (obj.data && typeof obj.data === "object") {
      const fromDataOutput = extractReply((obj.data as any).output);
      if (fromDataOutput) return fromDataOutput;

      const fromDataResponse = extractReply((obj.data as any).response);
      if (fromDataResponse) return fromDataResponse;

      const fromDataMessage = extractReply((obj.data as any).message);
      if (fromDataMessage) return fromDataMessage;
    }

    return "";
  }

  return "";
}

/**
 * Sends the user message to the n8n webhook and returns the assistant reply text.
 * Throws on network/parse failure; caller should show error state.
 */
export async function sendChatMessage(userMessage: string): Promise<string> {
  const trimmed = userMessage.trim();
  if (!trimmed) throw new Error("Empty message");

  const payload = {
    message: trimmed,
    sessionId: getSessionId(),
  };

  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const contentType = res.headers.get("Content-Type") ?? "";
  const isJson =
    contentType.includes("application/json") ||
    contentType.includes("application/json;");

  if (isJson) {
    const json = (await res.json()) as unknown;
    const text = extractReply(json);
    if (text && text.trim().length > 0) return text.trim();

    // Fallback técnico interno: dejar traza en consola, pero para el usuario
    // se manejará como error controlado desde la UI.
    try {
      // eslint-disable-next-line no-console
      console.warn("Chatbot: unable to extract reply from JSON", json);
    } catch {
      // ignore console errors
    }
    throw new Error("No reply in response");
  }

  const raw = await res.text();
  const t = raw.trim();
  if (t.length > 0) return t;

  throw new Error("Empty response");
}
