import json
import sys

import httpx


def main():
    base_url = sys.argv[1] if len(sys.argv) > 1 else "http://localhost:8000"

    ingest = httpx.post(f"{base_url}/api/rag/ingest", json={"rebuild": True}, timeout=120)
    ingest.raise_for_status()
    print("Ingest:", ingest.json())

    query = httpx.post(
        f"{base_url}/api/rag/query",
        json={"question": "What services do you offer?"},
        timeout=120,
    )
    query.raise_for_status()
    print("Query:", json.dumps(query.json(), indent=2))


if __name__ == "__main__":
    main()
