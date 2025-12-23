import requests

GITHUB_USER = "saberdhib"

def get_repos():
    url = f"https://github.com/saberdhib?tab=repositories"
    response = requests.get(url)
    response.raise_for_status()
    return response.json()
