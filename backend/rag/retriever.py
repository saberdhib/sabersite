from typing import List, Tuple

import numpy as np

from .settings import get_settings
from .types import Source
from .vectordb import query_collection


def _cosine_similarity(vec_a: np.ndarray, vec_b: np.ndarray) -> float:
    denom = (np.linalg.norm(vec_a) * np.linalg.norm(vec_b)) + 1e-10
    return float(np.dot(vec_a, vec_b) / denom)


def _mmr(
    query_vec: np.ndarray,
    candidate_vecs: List[np.ndarray],
    k: int,
    lambda_param: float = 0.7,
) -> List[int]:
    selected: List[int] = []
    candidates = list(range(len(candidate_vecs)))
    while candidates and len(selected) < k:
        scores = []
        for idx in candidates:
            relevance = _cosine_similarity(query_vec, candidate_vecs[idx])
            diversity = 0.0
            if selected:
                diversity = max(
                    _cosine_similarity(candidate_vecs[idx], candidate_vecs[s])
                    for s in selected
                )
            scores.append(lambda_param * relevance - (1 - lambda_param) * diversity)
        best_index = candidates[int(np.argmax(scores))]
        selected.append(best_index)
        candidates.remove(best_index)
    return selected


def retrieve(collection, query_embedding: List[float]):
    settings = get_settings()
    response = query_collection(collection, query_embedding, settings.mmr_candidates)
    documents = response["documents"][0]
    metadatas = response["metadatas"][0]
    distances = response["distances"][0]
    embeddings = response["embeddings"][0]

    embeddings_np = [np.array(vec) for vec in embeddings]
    query_np = np.array(query_embedding)

    selected_idx = _mmr(query_np, embeddings_np, settings.top_k)
    sources: List[Source] = []

    for idx in selected_idx:
        score = 1.0 - float(distances[idx])
        sources.append(
            Source(
                title=metadatas[idx].get("title", "Source"),
                url=metadatas[idx].get("source", ""),
                excerpt=documents[idx][:320].strip(),
                score=score,
            )
        )

    return sources
