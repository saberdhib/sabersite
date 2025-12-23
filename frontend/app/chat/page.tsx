export default function ChatPage() {
  return (
    <main className="min-h-[70vh] px-6 py-16">
      <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-[color:var(--surface)] p-8 shadow-sm">
        <div className="mb-6">
          <p className="text-sm uppercase tracking-[0.2em] text-muted">
            Ask Saber
          </p>
          <h1 className="mt-2 text-3xl font-semibold">
            AI assistant coming soon
          </h1>
          <p className="mt-3 text-sm text-muted">
            This chat will soon connect to curated projects, architectures, and
            writing from my knowledge base.
          </p>
        </div>
        <div className="space-y-4">
          <textarea
            className="h-32 w-full resize-none rounded-xl border border-border bg-transparent p-4 text-sm text-muted"
            placeholder="Ask about architecture decisions, RAG systems, or recent projects..."
            disabled
          />
          <button
            type="button"
            className="w-full rounded-xl border border-border bg-[color:var(--accent)] px-4 py-3 text-sm font-semibold text-[color:var(--accent-foreground)] opacity-60"
            disabled
          >
            Start chat
          </button>
        </div>
      </div>
    </main>
  );
}
