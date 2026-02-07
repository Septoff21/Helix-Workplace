# Helix-Workplace 开发任务清单

> **项目目标**: 构建一个 AI 重度用户的个人工作台，集成实时信息聚合、Prompt 管理、Skill 编排、文件架构等核心功能。

---

## Phase 1: 核心骨架 (Foundation)

### 1.1 项目初始化
- [x] 创建项目目录结构
- [x] 初始化 Next.js 前端项目
- [x] 初始化 Python FastAPI 后端项目
- [x] 配置 SQLite 数据库
- [x] 创建基础 API 路由 (6 routers: pulse, prompt, skill, agent, model, tools)

### 1.2 前端基础 UI
- [x] 安装 shadcn/ui 组件库 (16 components installed)
- [ ] 创建全局布局 (Layout)
  - [ ] 左侧导航栏 (Sidebar)
  - [ ] 主内容区 (Main Content)
  - [ ] 右侧快捷面板 (Quick Panel)
  - [ ] 底部状态栏 (Status Bar)
- [ ] 实现 Command Bar (Cmd+K)
- [ ] 实现深色/浅色主题切换
- [ ] 创建基础 Dashboard 页面

### 1.3 后端基础架构
- [ ] 创建 FastAPI 应用框架
- [ ] 设计数据库 Schema
  - [ ] 用户偏好表 (user_preferences)
  - [ ] 收藏内容表 (bookmarks)
  - [ ] Prompt 模板表 (prompts)
  - [ ] Skill 定义表 (skills)
- [ ] 实现基础 CRUD API
- [ ] 集成 Ollama 本地模型调用

---

## Phase 2: Pulse Reader (信息中枢)

### 2.1 信息源聚合
- [ ] 实现 RSS 解析器
  - [ ] Arxiv AI 论文
  - [ ] Hacker News
  - [ ] Hugging Face Trending
- [ ] 实现 GitHub Trending 抓取
- [ ] 创建信息源管理 API

### 2.2 内容处理
- [ ] 实现中英文摘要生成 (调用 LLM)
- [ ] 实现关键词提取与标签生成
- [ ] 实现权重系统 (基于用户点击行为)

### 2.3 前端展示
- [ ] 创建 Pulse Reader 页面
- [ ] 实现新闻卡片组件
- [ ] 实现收藏/归档功能
- [ ] 实现搜索与过滤

---

## Phase 3: Prompt Forge (架构工厂)

### 3.1 Prompt 管理
- [ ] 设计 Prompt 数据结构
  - [ ] System Core (核心人设)
  - [ ] Skills Block (技能块)
  - [ ] Constraints (约束条件)
  - [ ] Output Format (输出格式)
- [ ] 实现 Prompt CRUD API
- [ ] 实现版本控制 (快照保存)

### 3.2 Token 审计
- [ ] 实现 Token 计数器 (tiktoken)
- [ ] 实现成本估算 (基于不同模型定价)
- [ ] 实现 Prompt 压缩建议

### 3.3 前端编辑器
- [ ] 创建 Prompt 编辑器页面
- [ ] 实现模块化编辑界面
- [ ] 实现实时 Token 计数显示
- [ ] 实现模板库浏览/导入

---

## Phase 4: MCP Skill Orchestrator (技能编排)

### 4.1 Skill 定义
- [ ] 设计 MCP Skill Schema
- [ ] 创建内置 Skills
  - [ ] 文件读写 (file_ops)
  - [ ] 网页抓取 (scraper)
  - [ ] 邮件发送 (email)
  - [ ] HTTP 请求 (http_client)
- [ ] 实现 Skill 注册与发现 API

### 4.2 Skill 编排器
- [ ] 实现 Skill Chain 执行引擎
- [ ] 实现 DAG 调度器
- [ ] 实现执行日志记录

### 4.3 前端 Skill 商店
- [ ] 创建 Skill 商店页面
- [ ] 实现 Skill 卡片组件
- [ ] 实现 Skill Chain 可视化编辑器
- [ ] 实现一键导入/导出

---

## Phase 5: Semantic Architect (文件架构师)

### 5.1 文件监控
- [ ] 实现文件夹监控 (watchdog)
- [ ] 实现文件内容提取 (PDF/MD/TXT)
- [ ] 集成 ChromaDB 向量存储

### 5.2 语义分类
- [ ] 实现 Embedding 生成
- [ ] 实现自动标签推荐
- [ ] 实现关联性检测

### 5.3 前端文件管理
- [ ] 创建文件浏览页面
- [ ] 实现语义搜索
- [ ] 实现自动 README 生成开关

---

## Phase 6: Model Sentinel (模型扫描仪)

### 6.1 模型数据
- [ ] 抓取 OpenRouter 模型列表
- [ ] 抓取 Hugging Face 模型列表
- [ ] 设计模型对比数据结构

### 6.2 创新功能
- [ ] 实现 Vibe Check (用户体感评分)
- [ ] 实现 Live Latency 检测
- [ ] 实现模型族谱追踪

### 6.3 前端展示
- [ ] 创建 Model Sentinel 页面
- [ ] 实现模型对比表格
- [ ] 实现模型详情抽屉

---

## Phase 7: Agent 系统

### 7.1 Agent 定义
- [ ] 设计 Agent 数据结构
- [ ] 实现 Agent 创建/编辑 API
- [ ] 实现 Agent 与 Skill 绑定

### 7.2 Agent 执行
- [ ] 实现 Agent 任务队列
- [ ] 实现后台执行与状态跟踪
- [ ] 实现执行结果通知

### 7.3 前端 Agent 管理
- [ ] 创建 Agent 管理页面
- [ ] 实现 Agent 状态监控
- [ ] 实现 Agent 日志查看

---

## Phase 8: 用户体验优化

### 8.1 个性化
- [ ] 实现布局自定义保存
- [ ] 实现快捷键自定义
- [ ] 实现 Dashboard 卡片排序

### 8.2 性能优化
- [ ] 实现 API 缓存
- [ ] 实现前端懒加载
- [ ] 实现 WebSocket 实时更新

### 8.3 开源准备
- [ ] 编写 README.md
- [ ] 编写部署文档
- [ ] 创建 Docker 配置

---

## 进度追踪

| Phase | 状态 | 开始日期 | 完成日期 |
|-------|------|----------|----------|
| Phase 1 | 🔄 进行中 | 2026-02-07 | - |
| Phase 2 | ⏳ 待开始 | - | - |
| Phase 3 | ⏳ 待开始 | - | - |
| Phase 4 | ⏳ 待开始 | - | - |
| Phase 5 | ⏳ 待开始 | - | - |
| Phase 6 | ⏳ 待开始 | - | - |
| Phase 7 | ⏳ 待开始 | - | - |
| Phase 8 | ⏳ 待开始 | - | - |
