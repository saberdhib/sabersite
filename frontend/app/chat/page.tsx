"use client";

import { useEffect, useRef, useState } from "react";
import { useLanguage } from "../../components/LanguageProvider";

type Source = {
  title: string;
  url: string;
  excerpt: string;
  score: number;
};

type Message = {
  id: string;
  role: "user" | "assistant";
  content: string;
  sources?: Source[];
  showContactCta?: boolean;
};

const FALLBACK =
  "I don't know based on my sources.\nIf you'd like to discuss this further, feel free to contact Saber Dhib.";

export default function ChatPage() {
  const { t } = useLanguage();
  const [question, setQuestion] = useState("");
  const [useKnowledge, setUseKnowledge] = useState(true);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const apiBase =
    process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000";
  const endRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);

  function streamAnswer(
    messageId: string,
    fullText: string,
    sources: Source[],
    showContactCta: boolean
  ) {
    const words = fullText.split(" ");
    let index = 0;
    const interval = setInterval(() => {
      index += 1;
      setMessages((prev) =>
        prev.map((msg) =>
          msg.id === messageId
            ? {
                ...msg,
                content: words.slice(0, index).join(" "),
                sources,
                showContactCta,
              }
            : msg
        )
      );
      if (index >= words.length) {
        clearInterval(interval);
      }
    }, 35);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    const trimmed = question.trim();
    if (!trimmed || !useKnowledge || loading) {
      return;
    }
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };
    setMessages((prev) => [...prev, userMessage]);
    setQuestion("");
    setLoading(true);
    setIsTyping(true);

    try {
      const response = await fetch(`${apiBase}/api/rag/query`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question: trimmed }),
      });
      if (!response.ok) {
        throw new Error(`RAG query failed: ${response.status}`);
      }
      const data = await response.json();
      const answer = data.answer ?? "";
      const sources = data.sources ?? [];
      const noSources = !sources.length;
      const isFallback = answer.trim() === "I don't know based on my sources.";
      const finalText = noSources || isFallback ? FALLBACK : answer;
      const showContactCta = noSources || isFallback;
      const assistantMessage: Message = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: "",
        sources,
        showContactCta,
      };
      setMessages((prev) => [...prev, assistantMessage]);
      streamAnswer(assistantMessage.id, finalText, sources, showContactCta);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          id: `assistant-${Date.now()}`,
          role: "assistant",
          content:
            "The knowledge base is temporarily unavailable. Please try again shortly.",
        },
      ]);
    } finally {
      setLoading(false);
      setIsTyping(false);
    }
  }

  function handleKeyDown(event: React.KeyboardEvent<HTMLTextAreaElement>) {
    if (event.key === "Enter" && !event.shiftKey) {
      event.preventDefault();
      void handleSubmit(event as unknown as React.FormEvent);
    }
  }

  return (
    <main className="min-h-[80vh] px-6 py-10">
      <div className="mx-auto flex h-[75vh] max-w-3xl flex-col rounded-3xl border border-border bg-[color:var(--surface)] shadow-sm">
        <div className="border-b border-border px-6 py-5">
          <p className="text-xs uppercase tracking-[0.2em] text-muted">
            {t.chat.title}
          </p>
          <h1 className="mt-2 text-2xl font-semibold">{t.chat.subtitle}</h1>
          <p className="mt-2 text-sm text-muted">{t.chat.description}</p>
        </div>

        <div className="flex-1 overflow-y-auto px-6 py-6">
          <div className="space-y-6">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                    message.role === "user"
                      ? "bg-[color:var(--accent)] text-[color:var(--accent-foreground)]"
                      : "border border-border bg-[color:var(--background)] text-foreground"
                  }`}
                >
                  <p
                    className={`whitespace-pre-line ${
                      message.role === "assistant" &&
                      message.content === FALLBACK
                        ? "text-muted"
                        : ""
                    }`}
                  >
                    {message.content}
                  </p>
                  {message.role === "assistant" &&
                  message.sources &&
                  message.sources.length &&
                  !message.showContactCta ? (
                    <div className="mt-4 space-y-3">
                      <p className="text-xs uppercase tracking-[0.2em] text-muted">
                        {t.chat.sources}
                      </p>
                      {message.sources.map((source, index) => (
                        <div
                          key={`${source.title}-${index}`}
                          className="rounded-xl border border-border bg-[color:var(--surface)] p-3 text-xs text-muted"
                        >
                          <p className="text-xs font-semibold text-foreground">
                            {source.title}
                          </p>
                          <p className="mt-2">{source.excerpt}</p>
                          <p className="mt-2 opacity-70">{source.url}</p>
                        </div>
                      ))}
                    </div>
                  ) : null}
                  {message.role === "assistant" &&
                  message.showContactCta &&
                  message.content ? (
                    <div className="mt-4">
                      <a
                        href="/contact"
                        className="inline-flex items-center justify-center rounded-xl border border-border px-3 py-2 text-xs font-semibold text-foreground transition hover:border-[color:var(--accent)] hover:text-[color:var(--accent)]"
                      >
                        Contact Saber Dhib
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            ))}
            {isTyping ? (
              <div className="flex justify-start">
                <div className="rounded-2xl border border-border bg-[color:var(--background)] px-4 py-3 text-sm text-muted">
                  {t.chat.sending}
                </div>
              </div>
            ) : null}
            <div ref={endRef} />
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="border-t border-border px-6 py-4"
        >
          <div className="mb-3 flex items-center gap-3 text-sm text-muted">
            <label className="flex items-center gap-3">
              <input
                type="checkbox"
                checked={useKnowledge}
                onChange={(event) => setUseKnowledge(event.target.checked)}
                className="h-4 w-4 rounded border-border"
              />
              {t.chat.toggleLabel}
            </label>
          </div>
          <div className="flex items-end gap-3">
            <textarea
              className="min-h-[56px] w-full resize-none rounded-2xl border border-border bg-transparent p-3 text-sm text-foreground"
              placeholder={t.chat.placeholder}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={handleKeyDown}
              disabled={loading || !useKnowledge}
            />
            <button
              type="submit"
              className="rounded-2xl border border-border bg-[color:var(--accent)] px-5 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] disabled:opacity-60"
              disabled={loading || !useKnowledge}
            >
              {loading ? t.chat.sending : t.chat.button}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
