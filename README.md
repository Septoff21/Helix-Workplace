# Helix-Workplace

> 🌀 Personal AGI Workstation for Heavy AI Users

一个为 AI 重度用户打造的个人工作台，集成实时信息聚合、Prompt 管理、Skill 编排、文件架构等核心功能。

## ✨ Features

- **📊 Pulse Reader** - 实时 AI 新闻聚合与权重过滤
- **📝 Prompt Forge** - Prompt 资产化管理与 Token 审计
- **⚡ Skill Orchestrator** - MCP 协议的技能编排系统
- **📁 Semantic Architect** - 语义化文件自动归档
- **🔍 Model Sentinel** - 超越 OpenRouter 的模型选型
- **🛠️ Tools** - AI 工具目录 (Cursor, Antigravity, Manus 等)
- **🤖 Agent System** - 可自定义的 Agent 与任务调度

## 🚀 Quick Start

### Prerequisites

- Node.js 20+
- Python 3.11+
- (Optional) Ollama for local models

### Frontend

```bash
cd frontend
npm install
npm run dev
```

### Backend

```bash
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1  # Windows
pip install -e .
uvicorn app.main:app --reload --port 8000
```

## 🔑 BYOK (Bring Your Own Key)

Create a `.env` file in the backend directory:

```env
OPENROUTER_API_KEY=your_key_here
# or
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here
```

## 📁 Project Structure

```
Helix-Workplace/
├── frontend/          # Next.js + shadcn/ui
├── backend/           # FastAPI + SQLite
└── docs/              # Documentation
```

## 📜 License

MIT
