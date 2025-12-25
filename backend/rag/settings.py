import os
from dataclasses import dataclass


@dataclass(frozen=True)
class RagSettings:
    provider: str = os.getenv("RAG_PROVIDER", "ollama")
    ollama_base_url: str = os.getenv("OLLAMA_BASE_URL", "http://localhost:11434")
    openai_api_key: str = os.getenv("OPENAI_API_KEY", "")
    openai_model: str = os.getenv("OPENAI_MODEL", "gpt-4o-mini")
    openai_embedding_model: str = os.getenv(
        "OPENAI_EMBEDDING_MODEL", "text-embedding-3-small"
    )
    chroma_dir: str = os.getenv("CHROMA_DIR", "backend/storage/chroma")
    collection: str = os.getenv("CHROMA_COLLECTION", "sabersite")
    top_k: int = int(os.getenv("RAG_TOP_K", "6"))
    mmr_candidates: int = int(os.getenv("RAG_MMR_CANDIDATES", "12"))
    min_score: float = float(os.getenv("RAG_MIN_SCORE", "0.25"))


def get_settings() -> RagSettings:
    return RagSettings()
