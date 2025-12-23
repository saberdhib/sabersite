from fastapi import APIRouter
from pydantic import BaseModel

router = APIRouter(prefix="/contact", tags=["contact"])

class ContactRequest(BaseModel):
    name: str
    email: str
    message: str

@router.post("")
def contact(data: ContactRequest):
    # plus tard : email, Slack, Notion, etc.
    return {
        "status": "received",
        "name": data.name
    }
