import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, MessageCircle } from "lucide-react";
import { sendChatMessage } from "@/lib/chatbot-webhook";
import { cn } from "@/lib/utils";

const CHAT_TITLE = "Asistente APIORA";
const CHAT_SUBTITLE = "Resuelvo dudas sobre servicios y proyectos.";
const INITIAL_MESSAGES: { id: string; role: "assistant"; content: string }[] = [
  { id: "welcome-1", role: "assistant", content: "Hola, bienvenido a APIORA." },
  {
    id: "welcome-2",
    role: "assistant",
    content:
      "Cuéntame qué necesitas y te ayudo con tu web, automatizaciones o proyectos digitales.",
  },
];

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
};

const ERROR_FALLBACK =
  "Ha ocurrido un error al conectar con el asistente. Intenta de nuevo en unos minutos.";

function genId() {
  return `msg-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`;
}

export function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [hasWelcomed, setHasWelcomed] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const scrollToBottom = () => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, loading]);

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus();
    }
  }, [open]);

  const addMessage = (content: string, role: Message["role"]) => {
    setMessages((prev) => [...prev, { id: genId(), role, content }]);
  };

  const openChat = () => {
    setOpen(true);
    if (!hasWelcomed) {
      setMessages(INITIAL_MESSAGES);
      setHasWelcomed(true);
    }
  };

  const closeChat = () => {
    setOpen(false);
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;

    setInput("");
    setError(null);
    addMessage(text, "user");
    setLoading(true);

    try {
      const reply = await sendChatMessage(text);
      addMessage(reply, "assistant");
    } catch {
      addMessage(ERROR_FALLBACK, "assistant");
      setError(ERROR_FALLBACK);
    } finally {
      setLoading(false);
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      send();
    }
  }

  return (
    <>
      {/* Floating open button */}
      <button
        type="button"
        onClick={openChat}
        aria-label="Abrir chat"
        className={cn(
          "fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-2xl",
          "bg-primary text-primary-foreground shadow-lg",
          "border border-primary/30 hover:border-primary/50",
          "hover:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300",
          "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background",
        )}
      >
        <MessageCircle className="h-6 w-6" />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-50 flex items-end justify-end p-4 pb-6 sm:p-6"
          >
            {/* Backdrop: click to close */}
            <button
              type="button"
              aria-label="Cerrar"
              onClick={closeChat}
              className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            />
            <div className="relative flex flex-col w-full max-w-md h-[min(85vh,600px)] max-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-white/15 bg-[#0c0b0a] bg-gradient-to-b from-[#0e0d0c] via-[#0c0b0a] to-[#0a0908]">
              {/* Header */}
              <div className="flex items-center justify-between px-4 sm:px-5 py-4 border-b border-white/10 bg-white/[0.02]">
                <div>
                  <h2 className="font-display font-bold text-lg text-foreground tracking-wide">
                    {CHAT_TITLE}
                  </h2>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {CHAT_SUBTITLE}
                  </p>
                </div>
                <button
                  type="button"
                  onClick={closeChat}
                  aria-label="Cerrar chat"
                  className="p-2 rounded-xl text-muted-foreground hover:text-foreground hover:bg-white/10 transition-colors"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              {/* Messages */}
              <div
                ref={scrollRef}
                className="flex-1 overflow-y-auto overflow-x-hidden px-4 py-4 space-y-4 min-h-0 scroll-smooth"
                style={{
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(255,255,255,0.2) transparent",
                }}
              >
                {messages.map((msg) => (
                  <motion.div
                    key={msg.id}
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.25 }}
                    className={cn(
                      "flex",
                      msg.role === "user" ? "justify-end" : "justify-start",
                    )}
                  >
                    <div
                      className={cn(
                        "max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                        msg.role === "user"
                          ? "bg-primary/20 text-primary-foreground border border-primary/30 rounded-br-md"
                          : "bg-white/[0.06] text-foreground border border-white/10 rounded-bl-md",
                      )}
                    >
                      {msg.content}
                    </div>
                  </motion.div>
                ))}
                {loading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex justify-start"
                  >
                    <div className="rounded-2xl rounded-bl-md bg-white/[0.06] border border-white/10 px-4 py-2.5 text-sm text-muted-foreground">
                      Escribiendo...
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Input */}
              <div className="p-4 border-t border-white/10 bg-white/[0.02]">
                <div className="flex gap-2 rounded-2xl border border-white/10 bg-white/[0.04] p-2 focus-within:border-primary/40 focus-within:ring-1 focus-within:ring-primary/30 transition-colors">
                  <input
                    type="text"
                    ref={inputRef}
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Escribe tu mensaje…"
                    disabled={loading}
                    className="flex-1 min-w-0 bg-transparent px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none disabled:opacity-60"
                  />
                  <button
                    type="button"
                    onClick={send}
                    disabled={loading || !input.trim()}
                    className={cn(
                      "flex items-center justify-center rounded-xl px-4 py-2.5 text-sm font-medium transition-all",
                      "bg-primary text-primary-foreground",
                      "hover:bg-primary/90 disabled:opacity-50 disabled:pointer-events-none",
                      "focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-[#0c0b0a]",
                    )}
                  >
                    <Send className="h-4 w-4 sm:mr-1.5" />
                    <span className="hidden sm:inline">Enviar</span>
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
