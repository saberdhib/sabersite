from typing import List, Tuple

import chromadb

from .settings import get_settings


def get_client() -> chromadb.PersistentClient:
    settings = get_settings()
    return chromadb.PersistentClient(path=settings.chroma_dir)


def get_collection(client: chromadb.PersistentClient):
    settings = get_settings()
    return client.get_or_create_collection(settings.collection)


def reset_collection(client: chromadb.PersistentClient):
    settings = get_settings()
    try:
        client.delete_collection(settings.collection)
    except Exception:
        pass
    return get_collection(client)


def upsert_chunks(collection, chunks, embeddings: List[List[float]]):
    ids = [chunk.id for chunk in chunks]
    documents = [chunk.text for chunk in chunks]
    metadatas = [chunk.metadata for chunk in chunks]
    collection.upsert(
        ids=ids,
        documents=documents,
        metadatas=metadatas,
        embeddings=embeddings,
    )


def query_collection(collection, query_embedding: List[float], n_results: int):
    return collection.query(
        query_embeddings=[query_embedding],
        n_results=n_results,
        include=["documents", "metadatas", "distances", "embeddings"],
    )
