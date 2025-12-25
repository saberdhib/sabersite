from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings

def query_vector_store(question: str):
    embeddings = OpenAIEmbeddings()
    vectorstore = FAISS.load_local("vectorstore", embeddings)
    docs = vectorstore.similarity_search(question, k=4)
    return docs

