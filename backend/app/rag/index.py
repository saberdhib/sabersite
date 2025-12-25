from langchain.embeddings import OpenAIEmbeddings
from langchain.vectorstores import FAISS
from app.rag.loader import load_documents

def build_vector_store():
    docs = load_documents()
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.from_documents(docs, embeddings)
    vectorstore.save_local("vectorstore")

if __name__ == "__main__":
    build_vector_store()
