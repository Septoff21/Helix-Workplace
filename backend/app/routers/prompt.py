"""
Prompt Forge API - Prompt management and token counting.
"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

router = APIRouter()


class PromptCreate(BaseModel):
    """Prompt creation schema."""
    name: str
    category: str = "template"  # system, skill, template
    content: str
    

class PromptResponse(BaseModel):
    """Prompt response schema."""
    id: int
    name: str
    category: str
    content: str
    version: int
    token_count: int
    created_at: datetime


class TokenCountRequest(BaseModel):
    """Token count request."""
    text: str
    model: str = "gpt-4"


@router.get("/")
async def list_prompts(
    category: Optional[str] = None,
    db: AsyncSession = Depends(get_db)
):
    """List all prompts."""
    return {
        "prompts": [
            {
                "id": 1,
                "name": "Agent Coder",
                "category": "system",
                "content": "You are a professional software engineer...",
                "version": 1,
                "token_count": 150,
                "created_at": datetime.now().isoformat(),
            }
        ]
    }


@router.post("/")
async def create_prompt(prompt: PromptCreate, db: AsyncSession = Depends(get_db)):
    """Create a new prompt."""
    # TODO: Calculate token count
    return {
        "id": 1,
        "name": prompt.name,
        "category": prompt.category,
        "content": prompt.content,
        "version": 1,
        "token_count": len(prompt.content) // 4,  # rough estimate
        "created_at": datetime.now().isoformat(),
    }


@router.put("/{prompt_id}")
async def update_prompt(prompt_id: int, prompt: PromptCreate, db: AsyncSession = Depends(get_db)):
    """Update a prompt (creates new version)."""
    return {"message": "Prompt updated", "id": prompt_id, "version": 2}


@router.post("/{prompt_id}/snapshot")
async def create_snapshot(prompt_id: int, db: AsyncSession = Depends(get_db)):
    """Save a version snapshot."""
    return {"message": "Snapshot created", "prompt_id": prompt_id}


@router.post("/token-count")
async def count_tokens(request: TokenCountRequest):
    """Count tokens in text."""
    # TODO: Use tiktoken for accurate count
    estimated = len(request.text) // 4
    return {
        "text_length": len(request.text),
        "token_count": estimated,
        "model": request.model,
    }
