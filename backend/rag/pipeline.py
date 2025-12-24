import os
from pathlib import Path
from typing import List

from .chunker import chunk_documents
from .embedder import embed_texts
from .generator import generate_answer
from .loader import load_documents
from .retriever import retrieve
from .settings import get_settings
from .types import RetrievalResult, Source
from .vectordb import get_client, get_collection, reset_collection, upsert_chunks

def _resolve_repo_root() -> Path:
    env_root = os.getenv("RAG_REPO_ROOT")
    if env_root:
        return Path(env_root).resolve()
    current = Path(__file__).resolve()
    for parent in [current, *current.parents]:
        if (parent / "content").exists():
            return parent
    return current.parent


def ingest(rebuild: bool = False) -> int:
    repo_root = _resolve_repo_root()
    print("RAG repo_root:", repo_root)
    documents = load_documents(repo_root)
    print("RAG documents loaded:", len(documents))
    chunks = chunk_documents(documents)
    print("RAG chunks created:", len(chunks))
    if not chunks:
        return 0

    embeddings = embed_texts([chunk.text for chunk in chunks])
    client = get_client()
    collection = reset_collection(client) if rebuild else get_collection(client)
    upsert_chunks(collection, chunks, embeddings)
    return len(chunks)


def query(question: str) -> RetrievalResult:
    client = get_client()
    collection = get_collection(client)
    if collection.count() == 0:
        return RetrievalResult(
            answer="I don't know based on my sources.",
            sources=[],
        )

    query_embedding = embed_texts([question])[0]
    sources = retrieve(collection, query_embedding)

    settings = get_settings()
    filtered_sources = [s for s in sources if s.score >= settings.min_score]
    if not filtered_sources:
        return RetrievalResult(
            answer="I don't know based on my sources.",
            sources=[],
        )

    answer = generate_answer(question, filtered_sources)
    return RetrievalResult(answer=answer, sources=filtered_sources)
