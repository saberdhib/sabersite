from typing import Iterable, List

from .types import Document, Chunk


def _split_recursive(text: str, chunk_size: int, overlap: int) -> List[str]:
    separators = ["\n\n", "\n", ". ", " "]
    chunks = [text]
    for sep in separators:
        next_chunks: List[str] = []
        for chunk in chunks:
            if len(chunk) <= chunk_size:
                next_chunks.append(chunk)
                continue
            parts = chunk.split(sep)
            buffer = ""
            for part in parts:
                candidate = f"{buffer}{sep}{part}".strip() if buffer else part
                if len(candidate) <= chunk_size:
                    buffer = candidate
                else:
                    if buffer:
                        next_chunks.append(buffer)
                    buffer = part
            if buffer:
                next_chunks.append(buffer)
        chunks = next_chunks
    final_chunks: List[str] = []
    for chunk in chunks:
        if len(chunk) <= chunk_size:
            final_chunks.append(chunk.strip())
            continue
        for i in range(0, len(chunk), chunk_size - overlap):
            final_chunks.append(chunk[i : i + chunk_size].strip())
    return [c for c in final_chunks if c]


def chunk_documents(
    documents: Iterable[Document], chunk_size: int = 900, overlap: int = 150
) -> List[Chunk]:
    chunks: List[Chunk] = []
    for doc in documents:
        parts = _split_recursive(doc.text, chunk_size, overlap)
        for idx, part in enumerate(parts):
            chunk_id = f"{doc.metadata.get('source','doc')}-{idx}"
            chunks.append(
                Chunk(
                    id=chunk_id,
                    text=part,
                    metadata={
                        **doc.metadata,
                        "chunk": idx,
                    },
                )
            )
    return chunks
