from dataclasses import dataclass
from typing import Any, Dict, List, Optional


@dataclass
class Document:
    text: str
    metadata: Dict[str, Any]


@dataclass
class Chunk:
    id: str
    text: str
    metadata: Dict[str, Any]


@dataclass
class Source:
    title: str
    url: str
    excerpt: str
    score: float


@dataclass
class RetrievalResult:
    answer: str
    sources: List[Source]
