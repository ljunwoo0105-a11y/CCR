"""Minimal FastAPI stub - the actual app is a Next.js frontend that includes its own API routes.

The Next.js app runs on port 3000 and handles all /api/* routes via App Router.
This stub exists only to satisfy the supervisor process for the 'backend' program.
"""
from fastapi import FastAPI

app = FastAPI(title="CCR Backend Stub")


@app.get("/api/health")
def health():
    return {"status": "ok", "note": "Next.js app on port 3000 handles all real routes"}


@app.get("/")
def root():
    return {"message": "Next.js app on port 3000"}
