from fastapi import APIRouter
from pydantic import BaseModel
from app.rag.query import query_vector_store

router = APIRouter(prefix="/chat", tags=["chat"])

class ChatRequest(BaseModel):
    question: str

@router.post("")
def chat(req: ChatRequest):
    docs = query_vector_store(req.question)
    return {
        "question": req.question,
        "sources": [d.metadata["source"] for d in docs]
    }
