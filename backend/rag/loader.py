import re
from pathlib import Path
from typing import Dict, Iterable, List, Tuple

from .types import Document


SECTION_KEYS = [
    "about",
    "projects",
    "services",
    "knowledge",
    "events",
    "social",
]


def _find_object_block(text: str, key: str) -> str:
    pattern = re.compile(rf"{re.escape(key)}\s*:\s*{{", re.MULTILINE)
    match = pattern.search(text)
    if not match:
        return ""
    start = match.end() - 1
    depth = 0
    for idx in range(start, len(text)):
        if text[idx] == "{":
            depth += 1
        elif text[idx] == "}":
            depth -= 1
            if depth == 0:
                return text[start : idx + 1]
    return ""


def _extract_strings(block: str) -> List[str]:
    # Simple extractor for string literals in the section.
    return [s.strip() for s in re.findall(r'"([^"]{3,})"', block)]


def load_i18n_documents(repo_root: Path) -> List[Document]:
    i18n_path = repo_root / "frontend" / "lib" / "i18n.ts"
    if not i18n_path.exists():
        print("RAG i18n missing:", i18n_path)
        return []

    text = i18n_path.read_text(encoding="utf-8")
    docs: List[Document] = []

    for key in SECTION_KEYS:
        block = _find_object_block(text, key)
        if not block:
            continue
        strings = _extract_strings(block)
        if not strings:
            continue
        content = "\n".join(strings)
        docs.append(
            Document(
                text=content,
                metadata={"source": f"i18n:{key}", "title": f"Site {key.title()}"},
            )
        )

    return docs


def load_content_documents(repo_root: Path) -> List[Document]:
    content_dir = repo_root / "content"
    if not content_dir.exists():
        print("RAG content missing:", content_dir)
        return []

    docs: List[Document] = []
    matched = 0
    for pattern in ("*.md", "*.txt"):
        for path in content_dir.rglob(pattern):
            if not path.is_file():
                continue
            matched += 1
            text = path.read_text(encoding="utf-8", errors="ignore")
            if not text.strip():
                continue
            docs.append(
                Document(
                    text=text,
                    metadata={
                        "source": str(path.relative_to(repo_root)),
                        "title": path.stem.replace("-", " ").replace("_", " "),
                    },
                )
            )
    print("RAG content files matched:", matched)
    return docs


def load_documents(repo_root: Path) -> List[Document]:
    return load_i18n_documents(repo_root) + load_content_documents(repo_root)
