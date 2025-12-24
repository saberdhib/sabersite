from fastapi import FastAPI
from app.api import health, contact, github, rag
from fastapi.middleware.cors import CORSMiddleware
from dotenv import load_dotenv
from dotenv import load_dotenv
load_dotenv()

load_dotenv()

app = FastAPI(
    title="SaberDhib API",
    description="Backend API for saberdhib.com",
    version="0.1.0",
)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(health.router)
app.include_router(contact.router)
app.include_router(github.router)
app.include_router(rag.router)
