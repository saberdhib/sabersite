from pathlib import Path
from langchain.schema import Document

CONTENT_PATH = Path("../content")

def load_documents():
    documents = []

    for md_file in CONTENT_PATH.rglob("*.md"):
        text = md_file.read_text(encoding="utf-8")
        documents.append(
            Document(
                page_content=text,
                metadata={"source": str(md_file)}
            )
        )

    return documents
