from typing import List

import httpx

from .settings import get_settings

def _embed_ollama(texts: List[str]) -> List[List[float]]:
    settings = get_settings()
    embeddings: List[List[float]] = []
    for text in texts:
        response = httpx.post(
            f"{settings.ollama_base_url}/api/embeddings",
            json={"model": "nomic-embed-text", "prompt": text},
            timeout=60,
        )
        response.raise_for_status()
        embeddings.append(response.json()["embedding"])
    return embeddings


def _embed_openai(texts: List[str]) -> List[List[float]]:
    from openai import OpenAI

    settings = get_settings()
    client = OpenAI(api_key=settings.openai_api_key)
    response = client.embeddings.create(
        model=settings.openai_embedding_model,
        input=texts,
    )
    return [item.embedding for item in response.data]


def _embed_sentence_transformers(texts: List[str]) -> List[List[float]]:
    from sentence_transformers import SentenceTransformer

    model = SentenceTransformer("all-MiniLM-L6-v2")
    return [vector.tolist() for vector in model.encode(texts, normalize_embeddings=True)]


def embed_texts(texts: List[str]) -> List[List[float]]:
    settings = get_settings()
    provider = settings.provider.lower()
    if provider == "openai":
        return _embed_openai(texts)
    if provider == "ollama":
        return _embed_ollama(texts)
    return _embed_sentence_transformers(texts)
