from fastapi import APIRouter
from pydantic import BaseModel

from rag.pipeline import ingest as rag_ingest
from rag.pipeline import query as rag_query

router = APIRouter(prefix="/api/rag", tags=["rag"])


class IngestRequest(BaseModel):
    rebuild: bool = False


class QueryRequest(BaseModel):
    question: str
    lang: str | None = None


@router.post("/ingest")
def ingest(req: IngestRequest):
    count = rag_ingest(rebuild=req.rebuild)
    return {"ingested_chunks": count}


@router.post("/query")
def query(req: QueryRequest):
    result = rag_query(req.question)
    return {
        "answer": result.answer,
        "sources": [
            {
                "title": source.title,
                "url": source.url,
                "excerpt": source.excerpt,
                "score": source.score,
            }
            for source in result.sources
        ],
    }
