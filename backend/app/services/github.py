import requests
from fastapi import HTTPException

GITHUB_USER = "saberdhib"
GITHUB_API = "https://api.github.com"

HEADERS = {
    "Accept": "application/vnd.github+json",
    "User-Agent": "saberdhib-backend"
}

def get_repos():
    url = f"{GITHUB_API}/users/{GITHUB_USER}/repos"

    response = requests.get(url, headers=HEADERS)

    if response.status_code != 200:
        raise HTTPException(
            status_code=response.status_code,
            detail="GitHub API error"
        )

    return response.json()
