"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bot, Boxes, Cpu, Radar, Sparkles, Wrench } from "lucide-react";

const modules = [
  {
    id: "pulse",
    name: "Pulse Reader",
    icon: Radar,
    position: "top-left",
  },
  {
    id: "prompt",
    name: "Prompt Forge",
    icon: Sparkles,
    position: "top-right",
  },
  {
    id: "skills",
    name: "Skills Matrix",
    icon: Boxes,
    position: "left",
  },
  {
    id: "models",
    name: "Model Sentinel",
    icon: Cpu,
    position: "right",
  },
  {
    id: "tools",
    name: "Tool Orbit",
    icon: Wrench,
    position: "bottom-left",
  },
  {
    id: "agents",
    name: "Agent Bay",
    icon: Bot,
    position: "bottom-right",
  },
];

const lightModes = [
  {
    id: "aether",
    label: "Aether Glow",
    gridSize: 44,
    radialPrimary: "rgba(34,211,238,0.25)",
    radialAccent: "rgba(192,132,252,0.18)",
    ringColor: "rgba(34,211,238,0.35)",
    moduleGradient: "from-cyan-500/80 to-sky-500/60",
  },
  {
    id: "pulse",
    label: "Pulse Beam",
    gridSize: 52,
    radialPrimary: "rgba(249,115,22,0.24)",
    radialAccent: "rgba(236,72,153,0.16)",
    ringColor: "rgba(249,115,22,0.35)",
    moduleGradient: "from-orange-500/80 to-rose-500/60",
  },
  {
    id: "nebula",
    label: "Nebula Wash",
    gridSize: 38,
    radialPrimary: "rgba(59,130,246,0.2)",
    radialAccent: "rgba(168,85,247,0.14)",
    ringColor: "rgba(59,130,246,0.35)",
    moduleGradient: "from-blue-500/70 to-indigo-500/60",
  },
  {
    id: "verdant",
    label: "Verdant Flux",
    gridSize: 48,
    radialPrimary: "rgba(16,185,129,0.2)",
    radialAccent: "rgba(20,184,166,0.15)",
    ringColor: "rgba(16,185,129,0.4)",
    moduleGradient: "from-emerald-500/70 to-teal-500/60",
  },
  {
    id: "dusk",
    label: "Dusk Signal",
    gridSize: 46,
    radialPrimary: "rgba(129,140,248,0.22)",
    radialAccent: "rgba(251,191,36,0.15)",
    ringColor: "rgba(129,140,248,0.35)",
    moduleGradient: "from-violet-500/80 to-fuchsia-500/60",
  },
  {
    id: "aurora",
    label: "Aurora Lace",
    gridSize: 40,
    radialPrimary: "rgba(8,145,178,0.22)",
    radialAccent: "rgba(34,211,238,0.16)",
    ringColor: "rgba(8,145,178,0.38)",
    moduleGradient: "from-teal-400/80 to-cyan-500/60",
  },
];

const socialFeed = [
  {
    id: 1,
    type: "news",
    source: "Anthropic",
    avatar: "AN",
    title: "Claude 4 Released with Enhanced Reasoning",
    summary: "Improved multi-step reasoning and faster code generation.",
    time: "2h ago",
    tags: ["claude", "llm"],
  },
  {
    id: 2,
    type: "trending",
    source: "GitHub Trending",
    avatar: "GH",
    title: "browser-use/browser-use",
    summary: "Make websites accessible for AI agents. +2.5k today",
    time: "3h ago",
    tags: ["agent", "automation"],
  },
  {
    id: 3,
    type: "news",
    source: "Google AI",
    avatar: "GA",
    title: "Gemini 2.0 Flash: 1M Context Window",
    summary: "Fast, low-latency model for production workloads.",
    time: "5h ago",
    tags: ["gemini", "google"],
  },
  {
    id: 4,
    type: "social",
    source: "@karpathy",
    avatar: "AK",
    title: "The future of coding is vibing with AI",
    summary: "Spent 6 hours 'vibe coding' with a model and loved it.",
    time: "6h ago",
    tags: ["vibe-coding"],
  },
  {
    id: 5,
    type: "news",
    source: "DeepSeek",
    avatar: "DS",
    title: "DeepSeek R1: Open Source Reasoning Model",
    summary: "Matching premium performance at a fraction of the cost.",
    time: "8h ago",
    tags: ["open-source", "reasoning"],
  },
  {
    id: 6,
    type: "trending",
    source: "Hacker News",
    avatar: "HN",
    title: "MCP: The Protocol for AI Agents",
    summary: "Model Context Protocol is rapidly becoming a standard.",
    time: "10h ago",
    tags: ["mcp", "agent"],
  },
  {
    id: 7,
    type: "social",
    source: "@ylecun",
    avatar: "YL",
    title: "World models are the key to AGI",
    summary: "We need systems that understand physics, not just text.",
    time: "12h ago",
    tags: ["agi", "research"],
  },
  {
    id: 8,
    type: "news",
    source: "OpenAI",
    avatar: "OA",
    title: "GPT-5 Rumors: What We Know",
    summary: "Expected improvements in reasoning and multimodality.",
    time: "1d ago",
    tags: ["openai", "gpt5"],
  },
];

const moduleContent: Record<string, React.ReactNode> = {
  pulse: (
    <div className="space-y-3">
      <p className="text-muted-foreground">
        Real-time AI news aggregation with smart filtering.
      </p>
      <div className="grid grid-cols-2 gap-2">
        <Card className="p-3 bg-muted/30">
          <div className="text-2xl font-bold">12</div>
          <div className="text-xs text-muted-foreground">New Updates</div>
        </Card>
        <Card className="p-3 bg-muted/30">
          <div className="text-2xl font-bold">5</div>
          <div className="text-xs text-muted-foreground">Sources</div>
        </Card>
      </div>
    </div>
  ),
  prompt: (
    <div className="space-y-3">
      <p className="text-muted-foreground">Manage and optimize your prompts.</p>
      <div className="space-y-2">
        <div className="p-2 bg-muted/30 rounded">Agent Coder v2 - 1,250 tokens</div>
        <div className="p-2 bg-muted/30 rounded">Code Reviewer - 890 tokens</div>
        <div className="p-2 bg-muted/30 rounded">Doc Writer - 560 tokens</div>
      </div>
    </div>
  ),
  skills: (
    <div className="space-y-3">
      <p className="text-muted-foreground">MCP skills for automation.</p>
      <div className="flex flex-wrap gap-2">
        <Badge>Email Ops</Badge>
        <Badge>Web Scraper</Badge>
        <Badge>File Ops</Badge>
        <Badge>HTTP Relay</Badge>
      </div>
    </div>
  ),
  models: (
    <div className="space-y-3">
      <p className="text-muted-foreground">Compare and select AI models.</p>
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span>GPT-4o Mini</span>
          <Badge variant="outline">$0.15/1M</Badge>
        </div>
        <div className="flex justify-between">
          <span>Claude 3.5 Sonnet</span>
          <Badge variant="outline">$3.00/1M</Badge>
        </div>
        <div className="flex justify-between">
          <span>Gemini 2.0 Flash</span>
          <Badge variant="outline">$0.075/1M</Badge>
        </div>
      </div>
    </div>
  ),
  tools: (
    <div className="space-y-3">
      <p className="text-muted-foreground">Curated AI tooling.</p>
      <div className="space-y-2 text-sm">
        <div className="p-2 bg-muted/30 rounded flex items-center gap-2">Cursor</div>
        <div className="p-2 bg-muted/30 rounded flex items-center gap-2">Antigravity</div>
        <div className="p-2 bg-muted/30 rounded flex items-center gap-2">Claude Code</div>
      </div>
    </div>
  ),
  agents: (
    <div className="space-y-3">
      <p className="text-muted-foreground">Your AI agents.</p>
      <Card className="p-3 bg-muted/30 flex items-center gap-3">
        <span className="text-lg font-semibold">PB</span>
        <div>
          <div className="font-medium">Pulse Bot</div>
          <Badge className="bg-emerald-500/20 text-emerald-400">idle</Badge>
        </div>
      </Card>
      <Button variant="outline" className="w-full border-dashed">
        + New Agent
      </Button>
    </div>
  ),
};

export default function Dashboard() {
  const [activeModule, setActiveModule] = React.useState<string | null>(null);
  const [hoveredModule, setHoveredModule] = React.useState<string | null>(null);
  const [panelOpen, setPanelOpen] = React.useState(true);
  const [lightMode, setLightMode] = React.useState(lightModes[0].id);

  const getModulePosition = (position: string) => {
    switch (position) {
      case "top-left":
        return "top-[16%] left-[32%]";
      case "top-right":
        return "top-[16%] right-[32%]";
      case "left":
        return "top-[50%] left-[16%] -translate-y-1/2";
      case "right":
        return "top-[50%] right-[16%] -translate-y-1/2";
      case "bottom-left":
        return "bottom-[18%] left-[32%]";
      case "bottom-right":
        return "bottom-[18%] right-[32%]";
      default:
        return "";
    }
  };

  const activeModuleData = modules.find((module) => module.id === activeModule);
  const currentLight = lightModes.find((mode) => mode.id === lightMode) ?? lightModes[0];

  const closeModulePreview = () => {
    setActiveModule(null);
  };
  React.useEffect(() => {
    if (!activeModule || typeof window === "undefined") {
      return undefined;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        closeModulePreview();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [activeModule]);
  const ActiveIcon = activeModuleData?.icon;

  return (
    <div className="h-full w-full flex flex-col lg:flex-row">
      <div className="flex-1 relative flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at center, ${currentLight.radialPrimary}, transparent 55%)`,
          }}
        >
          <div className="absolute inset-0" />
        </div>
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: `radial-gradient(circle at 70% 20%, ${currentLight.radialAccent}, transparent 45%)`,
          }}
        />
        <div
          className="absolute inset-0 opacity-60 pointer-events-none bg-grid"
          style={{ backgroundSize: `${currentLight.gridSize}px ${currentLight.gridSize}px` }}
        />

        <div className="absolute top-6 right-6 z-20 flex flex-col items-end gap-2 pointer-events-auto">
          <button
            type="button"
            onClick={() => setPanelOpen((prev) => !prev)}
            className="flex items-center gap-2 rounded-full border border-cyan-400/40 bg-background/70 px-4 py-1 text-[10px] uppercase tracking-[0.4em] text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.4)]"
          >
            {panelOpen ? "Desktop Shades" : "Show Shades"}
            <span
              className={cn(
                "block h-3 w-3 rounded-full border border-cyan-200 transition-transform",
                panelOpen ? "rotate-90" : "-rotate-90"
              )}
            />
          </button>
          {panelOpen && (
            <div className="flex flex-col gap-2 rounded-2xl border border-cyan-400/30 bg-background/80 p-3 shadow-[0_0_18px_rgba(10,20,40,0.4)] backdrop-blur-lg">
              {lightModes.map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setLightMode(mode.id)}
                  aria-pressed={mode.id === lightMode}
                  className={cn(
                    "text-[11px] uppercase tracking-[0.4em] transition",
                    "rounded-full px-3 py-1.5 border",
                    mode.id === lightMode
                      ? "border-cyan-400/60 bg-cyan-500/30 text-cyan-100 shadow-[0_0_12px_rgba(14,165,233,0.5)]"
                      : "border-border/30 bg-background/30 text-muted-foreground"
                  )}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          )}
        </div>
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="absolute w-[520px] h-[520px] rounded-full border animate-orbit-slow"
            style={{ borderColor: currentLight.ringColor }}
          />
          <div
            className="absolute w-[420px] h-[420px] rounded-full border animate-orbit-reverse"
            style={{ borderColor: currentLight.ringColor }}
          />
          <div className="absolute w-[420px] h-[420px] animate-orbit-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-cyan-300/80 shadow-[0_0_12px_rgba(34,211,238,0.7)]" />
          </div>
          <div className="absolute w-[520px] h-[520px] animate-orbit-reverse">
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-fuchsia-300/80 shadow-[0_0_12px_rgba(232,121,249,0.7)]" />
          </div>
        </div>

        <div className="relative w-[220px] h-[220px] sm:w-[260px] sm:h-[260px] animate-float">
          <div className="absolute inset-0 rounded-full border-2 border-cyan-400/30 animate-orbit-slow" />
          <div className="absolute inset-4 rounded-full border border-cyan-400/20" />
          <div className="absolute inset-8 rounded-full bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 shadow-[0_0_40px_rgba(34,211,238,0.35)] border border-cyan-400/30 flex items-center justify-center">
            <div className="text-center">
              <div className="text-3xl font-semibold tracking-[0.3em] text-cyan-200">HELIX</div>
              <div className="text-xs text-cyan-300/80 mt-2">ORBITAL CORE</div>
            </div>
          </div>
        </div>

        {modules.map((module) => {
          const Icon = module.icon;
          return (
            <button
              key={module.id}
              type="button"
              onClick={() => {
                setActiveModule(module.id);
              }}
              onMouseEnter={() => setHoveredModule(module.id)}
              onMouseLeave={() => setHoveredModule(null)}
              className={cn(
                "absolute w-[78px] h-[78px] sm:w-[90px] sm:h-[90px] rounded-full flex items-center justify-center transition-all duration-300",
                "shadow-[0_0_18px_rgba(59,130,246,0.35)] hover:shadow-[0_0_30px_rgba(34,211,238,0.45)] hover:scale-110",
                "border border-white/20 text-xs font-semibold tracking-wider",
                `bg-gradient-to-br ${currentLight.moduleGradient}`,
                getModulePosition(module.position),
                hoveredModule === module.id && "scale-110 ring-4 ring-white/30"
              )}
              aria-label={`Open ${module.name}`}
            >
              <Icon className="w-6 h-6 text-white/90 drop-shadow" />
            </button>
          );
        })}

        {hoveredModule && (
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-background/70 backdrop-blur-xl px-4 py-2 rounded-full border border-cyan-400/30">
            <span className="text-sm font-medium">
              {modules.find((module) => module.id === hoveredModule)?.name}
            </span>
          </div>
        )}

        {activeModuleData && (
          <div className="absolute inset-0 z-30 flex items-center justify-center pointer-events-none">
            <Card className="relative w-[340px] p-4 bg-[rgba(15,23,42,0.92)] border border-cyan-400/30 shadow-[0_0_36px_rgba(34,211,238,0.25)] pointer-events-auto overflow-hidden">
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(59,130,246,0.35),transparent_60%)]" />
                <div className="absolute inset-0 scanlines mix-blend-screen opacity-70" />
              </div>
              <div className="relative">
                <div className="flex items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-cyan-300/80">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                  Module Live
                </div>
                <div className="mt-2 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <span
                    className={cn(
                      "w-10 h-10 rounded-full flex items-center justify-center text-white",
                      `bg-gradient-to-br ${currentLight.moduleGradient}`
                    )}
                    >
                      {ActiveIcon && <ActiveIcon className="w-5 h-5" />}
                    </span>
                    <div>
                      <div className="text-sm font-semibold tracking-wider">
                        {activeModuleData.name}
                      </div>
                      <div className="text-xs text-muted-foreground">Module preview</div>
                    </div>
                  </div>
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={closeModulePreview}
                    className="border-cyan-400/30"
                  >
                    Close
                  </Button>
                </div>
                <div className="mt-4">
                  {moduleContent[activeModuleData.id]}
                </div>
                <div className="flex gap-2 mt-4">
                  <Button className="flex-1 text-[11px] tracking-[0.4em]" variant="secondary">
                    Inspect
                  </Button>
                  <Button
                    className={cn(
                      "flex-1 border-0 text-[11px] tracking-[0.4em]",
                    `bg-gradient-to-r ${currentLight.moduleGradient}`
                    )}
                  >
                    Open Module
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        )}
      </div>

      <div className="w-full lg:w-[360px] border-l border-border/50 bg-background/50 backdrop-blur-sm flex flex-col p-4">
        <div className="flex-1 flex flex-col">
          <div className="relative flex-1 rounded-[28px] border border-cyan-400/30 bg-gradient-to-b from-slate-950/90 via-slate-950/70 to-slate-900/80 shadow-[0_0_40px_rgba(8,145,178,0.25)] overflow-hidden">
            <div className="absolute inset-0 pointer-events-none">
              <div className="absolute inset-0 scanlines opacity-35" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_0%,rgba(34,211,238,0.25),transparent_45%)]" />
            </div>
            <div className="relative z-10 flex items-center justify-between px-4 py-3 border-b border-cyan-400/20">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
                <span className="w-2 h-2 rounded-full bg-amber-300 shadow-[0_0_6px_rgba(251,191,36,0.7)]" />
                <span className="w-2 h-2 rounded-full bg-rose-400 shadow-[0_0_6px_rgba(251,113,133,0.7)]" />
              </div>
              <div className="text-[11px] uppercase tracking-[0.35em] text-cyan-300">
                Pulse Console
              </div>
              <div className="text-[10px] text-cyan-200/70">SYNC</div>
            </div>
            <ScrollArea className="relative z-10 flex-1">
              <div className="p-4 space-y-3">
                {socialFeed.map((item) => (
                  <Card
                    key={item.id}
                    className="p-3 bg-gradient-to-br from-slate-900/80 via-slate-900/60 to-slate-800/70 border border-cyan-400/20 hover:border-cyan-300/50 transition-all cursor-pointer group"
                  >
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-slate-800/80 border border-cyan-400/30 flex items-center justify-center text-xs font-semibold tracking-wider text-cyan-200 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
                        {item.avatar}
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 text-xs text-muted-foreground">
                          <span className="font-medium text-foreground">{item.source}</span>
                          <span>-</span>
                          <span>{item.time}</span>
                        </div>
                        <div className="font-medium text-sm mt-1 line-clamp-2 group-hover:text-cyan-300 transition-colors">
                          {item.title}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                          {item.summary}
                        </p>
                        <div className="flex gap-1.5 mt-2 flex-wrap">
                          {item.tags.map((tag) => (
                            <button
                              key={tag}
                              type="button"
                              className="inline-flex items-center gap-1 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-2 py-0.5 text-[10px] uppercase tracking-wider text-cyan-200 transition hover:border-cyan-300/50 hover:bg-cyan-400/20"
                            >
                              <span className="h-1 w-1 rounded-full bg-cyan-300/90" />
                              {tag}
                            </button>
                          ))}
                        </div>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>
            </ScrollArea>
          </div>
          <div className="mt-3 flex flex-col items-center gap-1">
            <div className="h-2 w-20 rounded-full bg-slate-800/90 shadow-inner" />
            <div className="h-3 w-36 rounded-full bg-slate-900/90 shadow-inner" />
          </div>
        </div>
      </div>
    </div>
  );
}
