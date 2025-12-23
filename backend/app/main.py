from fastapi import FastAPI
from app.api import health, contact, github

app = FastAPI(
    title="SaberDhib API",
    description="Backend API for saberdhib.com",
    version="0.1.0",
)

app.include_router(health.router)
app.include_router(contact.router)
app.include_router(github.router)
