"""
Tools API - AI tools directory (Cursor, Antigravity, Manus, etc.)
"""
from fastapi import APIRouter
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

router = APIRouter()


class Tool(BaseModel):
    """AI tool information."""
    id: str
    name: str
    category: str  # ide, agent, cli, api
    description: str
    url: str
    docs_url: Optional[str] = None
    api_docs: Optional[str] = None
    cli_docs: Optional[str] = None
    last_updated: Optional[datetime] = None
    tags: list[str] = []


@router.get("/")
async def list_tools():
    """List all AI tools."""
    return {
        "tools": [
            {
                "id": "cursor",
                "name": "Cursor",
                "category": "ide",
                "description": "AI-first code editor with deep integration",
                "url": "https://cursor.com",
                "docs_url": "https://docs.cursor.com",
                "tags": ["coding", "ide", "agent"],
            },
            {
                "id": "antigravity",
                "name": "Antigravity (Gemini CLI)",
                "category": "cli",
                "description": "Google's agentic coding assistant",
                "url": "https://cloud.google.com/products/gemini",
                "docs_url": "https://cloud.google.com/docs/gemini",
                "tags": ["coding", "cli", "agent", "google"],
            },
            {
                "id": "claude-code",
                "name": "Claude Code",
                "category": "cli",
                "description": "Anthropic's agentic coding assistant",
                "url": "https://docs.anthropic.com/en/docs/claude-code",
                "docs_url": "https://docs.anthropic.com/en/docs/claude-code",
                "tags": ["coding", "cli", "agent", "anthropic"],
            },
            {
                "id": "manus",
                "name": "Manus",
                "category": "agent",
                "description": "General purpose AI agent platform",
                "url": "https://manus.im",
                "tags": ["agent", "automation"],
            },
            {
                "id": "windsurf",
                "name": "Windsurf",
                "category": "ide",
                "description": "AI-powered IDE by Codeium",
                "url": "https://codeium.com/windsurf",
                "tags": ["coding", "ide", "codeium"],
            },
            {
                "id": "aider",
                "name": "Aider",
                "category": "cli",
                "description": "AI pair programming in your terminal",
                "url": "https://aider.chat",
                "docs_url": "https://aider.chat/docs",
                "tags": ["coding", "cli", "open-source"],
            },
            {
                "id": "openrouter",
                "name": "OpenRouter",
                "category": "api",
                "description": "Unified API for 100+ AI models",
                "url": "https://openrouter.ai",
                "api_docs": "https://openrouter.ai/docs",
                "tags": ["api", "aggregator", "models"],
            },
            {
                "id": "v0",
                "name": "v0.dev",
                "category": "agent",
                "description": "AI UI generator by Vercel",
                "url": "https://v0.dev",
                "tags": ["ui", "frontend", "vercel"],
            },
        ],
        "categories": [
            {"id": "ide", "name": "IDEs & Editors", "icon": "💻"},
            {"id": "cli", "name": "CLI Tools", "icon": "⌨️"},
            {"id": "agent", "name": "Agent Platforms", "icon": "🤖"},
            {"id": "api", "name": "API Services", "icon": "🔌"},
        ],
    }


@router.get("/{tool_id}")
async def get_tool_detail(tool_id: str):
    """Get detailed tool information with usage guides."""
    return {
        "id": tool_id,
        "name": tool_id.title(),
        "usage_guide": "# Usage Guide\n\nTODO: Add detailed usage",
        "api_examples": [],
        "cli_examples": [],
        "related_tools": [],
    }


@router.post("/")
async def add_tool(tool: Tool):
    """Add a new tool to the directory."""
    return {"message": "Tool added", "tool": tool}


@router.get("/trending")
async def get_trending_tools():
    """Get trending AI tools."""
    return {
        "trending": [
            {"id": "cursor", "trend_score": 95},
            {"id": "claude-code", "trend_score": 92},
            {"id": "antigravity", "trend_score": 88},
        ]
    }
