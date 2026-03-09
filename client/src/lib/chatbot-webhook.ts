/**
 * Chatbot webhook client for n8n.
 * Single source of truth for URL, request body, and response parsing.
 */

const WEBHOOK_URL =
  "https://n8n-n8n.3asuar.easypanel.host/webhook/bcfd9857-a1cf-43fc-be6c-b8a22b300264/chat";

const KNOWN_TEXT_KEYS = [
  "response",
  "output",
  "text",
  "message",
  "answer",
  "reply",
  "result",
  "content",
] as const;

function extractTextFromObject(obj: unknown): string | null {
  if (obj === null || typeof obj !== "object") return null;
  const o = obj as Record<string, unknown>;

  for (const key of KNOWN_TEXT_KEYS) {
    const v = o[key];
    if (typeof v === "string" && v.trim().length > 0) return v.trim();
  }

  if (o.data && typeof o.data === "object") {
    const fromData = extractTextFromObject(o.data);
    if (fromData) return fromData;
  }

  if (o.output && typeof o.output === "object") {
    const v = (o.output as Record<string, unknown>).text ?? (o.output as Record<string, unknown>).message;
    if (typeof v === "string" && v.trim().length > 0) return v.trim();
  }

  return null;
}

/**
 * Sends the user message to the n8n webhook and returns the assistant reply text.
 * Throws on network/parse failure; caller should show error state.
 */
export async function sendChatMessage(userMessage: string): Promise<string> {
  const trimmed = userMessage.trim();
  if (!trimmed) throw new Error("Empty message");

  const res = await fetch(WEBHOOK_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      message: trimmed,
      text: trimmed,
      input: trimmed,
    }),
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
    const text = extractTextFromObject(json);
    if (text) return text;
    if (typeof json === "string" && json.trim().length > 0) return json.trim();
    throw new Error("No reply in response");
  }

  const raw = await res.text();
  const t = raw.trim();
  if (t.length > 0) return t;
  throw new Error("Empty response");
}
