# Helix-Workplace 实现计划

> **项目名称**: Helix-Workplace  
> **定位**: AI 重度用户的个人 AGI 工作台  
> **创建日期**: 2026-02-07

---

## 项目概述

Helix-Workplace 是一个集成化的 AI 工作台，为重度 AI 用户提供：
- 🔥 **Pulse Reader**: 实时 AI 新闻聚合与权重过滤
- 📝 **Prompt Forge**: Prompt 资产化管理与 Token 审计
- ⚡ **Skill Orchestrator**: MCP 协议的技能编排系统
- 📁 **Semantic Architect**: 语义化文件自动归档
- 🔍 **Model Sentinel**: 超越 OpenRouter 的模型选型
- 🛠️ **Tools**: AI 工具目录 (Cursor, Antigravity, Manus 等)
- 🤖 **Agent System**: 可自定义的 Agent 与任务调度

---

## 技术栈

| 层级 | 技术 | 版本 |
|------|------|------|
| **前端** | Next.js 15 + React 19 | Latest |
| **UI 组件** | shadcn/ui + Tailwind CSS | Latest |
| **后端** | Python FastAPI | 0.109+ |
| **数据库** | SQLite + ChromaDB | SQLite 3, Chroma 0.4+ |
| **LLM** | BYOK (OpenRouter/OpenAI/Anthropic) + Ollama | - |
| **包管理** | npm (前端) / pip (后端) | Latest |

---

## 文件结构

```
Helix-Workplace/
├── frontend/                      # Next.js 前端
│   ├── src/
│   │   ├── app/                   # App Router 页面
│   │   ├── components/            # React 组件
│   │   │   ├── layout/            # 布局组件
│   │   │   └── ui/                # shadcn/ui 组件
│   │   └── lib/                   # 工具函数
│   └── package.json
│
├── backend/                       # Python FastAPI 后端
│   ├── app/
│   │   ├── main.py                # FastAPI 入口
│   │   ├── config.py              # 配置 (BYOK)
│   │   ├── database.py            # 数据库
│   │   ├── models/                # SQLAlchemy 模型
│   │   ├── routers/               # API 路由
│   │   ├── services/              # 业务逻辑
│   │   └── skills/                # 内置 Skills
│   ├── data/                      # SQLite + ChromaDB
│   └── pyproject.toml
│
├── docs/                          # 文档
│   ├── TASK.md                    # 任务清单
│   └── IMPLEMENTATION_PLAN.md     # 实现计划
│
└── README.md
```

---

## 数据库 Schema

```sql
-- 用户偏好
CREATE TABLE user_preferences (
    id INTEGER PRIMARY KEY,
    key TEXT UNIQUE NOT NULL,
    value TEXT,
    updated_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- 收藏内容
CREATE TABLE bookmarks (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    url TEXT,
    source TEXT,
    summary TEXT,
    tags TEXT,
    weight INTEGER DEFAULT 0,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Prompt 模板
CREATE TABLE prompts (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    category TEXT,
    content TEXT NOT NULL,
    version INTEGER DEFAULT 1,
    parent_id INTEGER,
    token_count INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Skill 定义
CREATE TABLE skills (
    id INTEGER PRIMARY KEY,
    name TEXT UNIQUE NOT NULL,
    description TEXT,
    schema TEXT NOT NULL,
    source TEXT,
    enabled BOOLEAN DEFAULT 1,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

-- Agent 定义
CREATE TABLE agents (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    avatar TEXT,
    system_prompt_id INTEGER,
    skills TEXT,
    status TEXT DEFAULT 'idle',
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## API 设计

| 模块 | Endpoint | 功能 |
|------|----------|------|
| Pulse | `/api/pulse/feed` | 获取新闻流 |
| Pulse | `/api/pulse/sources` | 管理信息源 |
| Prompt | `/api/prompts` | Prompt CRUD |
| Prompt | `/api/prompts/token-count` | Token 计数 |
| Skills | `/api/skills` | Skill 管理 |
| Skills | `/api/skills/{id}/execute` | 执行 Skill |
| Agents | `/api/agents` | Agent 管理 |
| Agents | `/api/agents/{id}/run` | 运行 Agent |
| Models | `/api/models` | 模型列表 |
| Tools | `/api/tools` | AI 工具目录 |

---

## 开发指南

### 启动开发环境

**后端**:
```powershell
cd backend
python -m venv .venv
.\.venv\Scripts\Activate.ps1
pip install -e .
uvicorn app.main:app --reload --port 8000
```

**前端**:
```powershell
cd frontend
npm install
npm run dev
```

### 每次开发前
1. 查看 `docs/TASK.md` 确认当前进度
2. 更新任务状态为 `[/]` (进行中)
3. 完成后更新为 `[x]`

### Git 提交规范
```
feat: 新功能
fix: Bug 修复
docs: 文档更新
refactor: 重构
```

---

## BYOK 配置

在 `backend/.env` 中配置 API Key:

```env
# OpenRouter (推荐，有免费额度)
OPENROUTER_API_KEY=your_key_here

# 或其他提供商
OPENAI_API_KEY=your_key_here
ANTHROPIC_API_KEY=your_key_here

# 本地模型 (可选)
OLLAMA_BASE_URL=http://localhost:11434
```
