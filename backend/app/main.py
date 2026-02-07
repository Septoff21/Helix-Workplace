"""
Helix-Workplace Backend API
===========================
Personal AGI Workstation for heavy AI users.
"""
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from contextlib import asynccontextmanager

from app.database import init_db
from app.routers import pulse, prompt, skill, agent, model, tools


@asynccontextmanager
async def lifespan(app: FastAPI):
    """Initialize database on startup."""
    await init_db()
    yield


app = FastAPI(
    title="Helix-Workplace API",
    description="Personal AGI Workstation Backend",
    version="0.1.0",
    lifespan=lifespan,
)

# CORS for frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Register routers
app.include_router(pulse.router, prefix="/api/pulse", tags=["Pulse Reader"])
app.include_router(prompt.router, prefix="/api/prompts", tags=["Prompt Forge"])
app.include_router(skill.router, prefix="/api/skills", tags=["Skills"])
app.include_router(agent.router, prefix="/api/agents", tags=["Agents"])
app.include_router(model.router, prefix="/api/models", tags=["Model Sentinel"])
app.include_router(tools.router, prefix="/api/tools", tags=["Tools"])


@app.get("/api/health")
async def health_check():
    """Health check endpoint."""
    return {"status": "ok", "version": "0.1.0"}


@app.get("/api/config")
async def get_config():
    """Get system configuration (for frontend)."""
    return {
        "modules": [
            {"id": "pulse", "name": "Pulse Reader", "icon": "📊", "enabled": True},
            {"id": "prompt", "name": "Prompt Forge", "icon": "📝", "enabled": True},
            {"id": "skills", "name": "Skills", "icon": "⚡", "enabled": True},
            {"id": "files", "name": "Files", "icon": "📁", "enabled": True},
            {"id": "models", "name": "Model Sentinel", "icon": "🔍", "enabled": True},
            {"id": "tools", "name": "Tools", "icon": "🛠️", "enabled": True},
            {"id": "agents", "name": "Agents", "icon": "🤖", "enabled": True},
        ],
        "version": "0.1.0",
    }
