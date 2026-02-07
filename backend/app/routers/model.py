"""
Model Sentinel API - Model information and comparison.
"""
from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional

router = APIRouter()


class ModelInfo(BaseModel):
    """Model information schema."""
    id: str
    name: str
    provider: str
    context_length: int
    pricing: dict  # input/output per 1M tokens
    capabilities: list[str]
    vibe_score: Optional[float] = None  # User experience rating


@router.get("/")
async def list_models():
    """List available models."""
    return {
        "models": [
            {
                "id": "openai/gpt-4o-mini",
                "name": "GPT-4o Mini",
                "provider": "OpenAI",
                "context_length": 128000,
                "pricing": {"input": 0.15, "output": 0.60},
                "capabilities": ["chat", "code", "vision"],
                "vibe_score": 8.5,
            },
            {
                "id": "anthropic/claude-3.5-sonnet",
                "name": "Claude 3.5 Sonnet",
                "provider": "Anthropic",
                "context_length": 200000,
                "pricing": {"input": 3.0, "output": 15.0},
                "capabilities": ["chat", "code", "analysis"],
                "vibe_score": 9.2,
            },
            {
                "id": "google/gemini-2.0-flash",
                "name": "Gemini 2.0 Flash",
                "provider": "Google",
                "context_length": 1000000,
                "pricing": {"input": 0.075, "output": 0.30},
                "capabilities": ["chat", "code", "vision", "audio"],
                "vibe_score": 8.8,
            },
            {
                "id": "deepseek/deepseek-r1",
                "name": "DeepSeek R1",
                "provider": "DeepSeek",
                "context_length": 64000,
                "pricing": {"input": 0.55, "output": 2.19},
                "capabilities": ["chat", "code", "reasoning"],
                "vibe_score": 9.0,
            },
        ]
    }


@router.get("/{model_id}")
async def get_model_detail(model_id: str):
    """Get detailed model information."""
    return {
        "id": model_id,
        "name": "Model Name",
        "provider": "Provider",
        "lineage": "Base model info",
        "benchmarks": {},
        "community_posts": [],
    }


@router.get("/compare")
async def compare_models(models: str):
    """Compare multiple models (comma-separated IDs)."""
    model_list = models.split(",")
    return {
        "models": model_list,
        "comparison": {},
    }


@router.post("/{model_id}/vibe-score")
async def update_vibe_score(model_id: str, score: float):
    """Update user vibe score for a model."""
    return {"model_id": model_id, "vibe_score": score}
