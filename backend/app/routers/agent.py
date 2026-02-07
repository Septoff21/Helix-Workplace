"""
Agents API - Agent management and execution.
"""
from fastapi import APIRouter, Depends
from sqlalchemy.ext.asyncio import AsyncSession
from app.database import get_db
from pydantic import BaseModel
from typing import Optional
from datetime import datetime

router = APIRouter()


class AgentCreate(BaseModel):
    """Agent creation schema."""
    name: str
    avatar: Optional[str] = None
    system_prompt_id: Optional[int] = None
    skills: list[int] = []


class AgentResponse(BaseModel):
    """Agent response schema."""
    id: int
    name: str
    avatar: Optional[str]
    status: str
    skills: list[int]
    created_at: datetime


@router.get("/")
async def list_agents(db: AsyncSession = Depends(get_db)):
    """List all agents."""
    return {
        "agents": [
            {
                "id": 1,
                "name": "Pulse Bot",
                "avatar": "🤖",
                "status": "idle",
                "skills": [1, 2],
                "created_at": datetime.now().isoformat(),
            }
        ]
    }


@router.post("/")
async def create_agent(agent: AgentCreate, db: AsyncSession = Depends(get_db)):
    """Create a new agent."""
    return {
        "id": 1,
        "name": agent.name,
        "avatar": agent.avatar or "🤖",
        "status": "idle",
        "skills": agent.skills,
        "created_at": datetime.now().isoformat(),
    }


@router.put("/{agent_id}")
async def update_agent(agent_id: int, agent: AgentCreate, db: AsyncSession = Depends(get_db)):
    """Update an agent."""
    return {"message": "Agent updated", "id": agent_id}


@router.post("/{agent_id}/run")
async def run_agent(
    agent_id: int,
    task: str,
    db: AsyncSession = Depends(get_db)
):
    """Run an agent task."""
    return {
        "agent_id": agent_id,
        "task": task,
        "status": "running",
        "job_id": "job_123",
    }


@router.get("/{agent_id}/logs")
async def get_agent_logs(agent_id: int, limit: int = 50, db: AsyncSession = Depends(get_db)):
    """Get agent execution logs."""
    return {
        "agent_id": agent_id,
        "logs": [],
    }
