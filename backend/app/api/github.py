from fastapi import APIRouter
from app.services.github import get_repos

router = APIRouter(prefix="/github", tags=["github"])

@router.get("")
def github_repos():
    return get_repos()
