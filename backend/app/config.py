"""
Helix-Workplace Configuration
"""
from pydantic_settings import BaseSettings
from pathlib import Path


class Settings(BaseSettings):
    """Application settings with BYOK support."""
    
    # Database
    database_url: str = "sqlite+aiosqlite:///./data/helix.db"
    
    # BYOK - Bring Your Own Key (users configure these)
    openrouter_api_key: str = ""
    openai_api_key: str = ""
    anthropic_api_key: str = ""
    
    # Default LLM provider
    default_llm_provider: str = "openrouter"  # openrouter, openai, anthropic, ollama
    default_model: str = "openai/gpt-4o-mini"  # OpenRouter free tier
    
    # Ollama (local, optional)
    ollama_base_url: str = "http://localhost:11434"
    
    # Paths
    data_dir: Path = Path("./data")
    
    class Config:
        env_file = ".env"
        env_file_encoding = "utf-8"


settings = Settings()
