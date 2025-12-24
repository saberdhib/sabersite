from typing import List

import httpx

from .settings import get_settings
from .types import Source


SYSTEM_PROMPT = (
    "You are a precise AI assistant. Use ONLY the provided sources. "
    "If the answer is not in the sources, say: \"I don't know based on my sources.\" "
    "Cite sources inline as [1], [2], etc."
)


def _build_context(sources: List[Source]) -> str:
    blocks = []
    for idx, source in enumerate(sources, start=1):
        blocks.append(
            f"[{idx}] {source.title} ({source.url})\n{source.excerpt}"
        )
    return "\n\n".join(blocks)


def _generate_openai(question: str, sources: List[Source]) -> str:
    from openai import OpenAI

    settings = get_settings()
    client = OpenAI(api_key=settings.openai_api_key)
    context = _build_context(sources)
    response = client.chat.completions.create(
        model=settings.openai_model,
        messages=[
            {"role": "system", "content": SYSTEM_PROMPT},
            {
                "role": "user",
                "content": f"Question: {question}\n\nSources:\n{context}",
            },
        ],
        temperature=0.2,
    )
    return response.choices[0].message.content.strip()


def _generate_ollama(question: str, sources: List[Source]) -> str:
    settings = get_settings()
    context = _build_context(sources)
    response = httpx.post(
        f"{settings.ollama_base_url}/api/generate",
        json={
            "model": "llama3.1",
            "prompt": f"{SYSTEM_PROMPT}\n\nQuestion: {question}\n\nSources:\n{context}",
            "stream": False,
        },
        timeout=120,
    )
    response.raise_for_status()
    return response.json()["response"].strip()


def generate_answer(question: str, sources: List[Source]) -> str:
    if not sources:
        return "I don't know based on my sources."
    settings = get_settings()
    if settings.provider.lower() == "openai":
        return _generate_openai(question, sources)
    if settings.provider.lower() == "ollama":
        return _generate_ollama(question, sources)
    return "I don't know based on my sources."
