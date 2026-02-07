"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

const welcomeStats = [
  { label: "New Updates", value: "12", icon: "📊", color: "violet" },
  { label: "Saved Prompts", value: "24", icon: "📝", color: "emerald" },
  { label: "Active Skills", value: "8", icon: "⚡", color: "amber" },
  { label: "Agents", value: "3", icon: "🤖", color: "blue" },
]

const recentNews = [
  {
    id: 1,
    title: "Claude 4 Released with Enhanced Reasoning",
    source: "Anthropic Blog",
    time: "2h ago",
    tags: ["claude", "anthropic"],
  },
  {
    id: 2,
    title: "New Agent Paradigm: Vibe Coding Takes Off",
    source: "Hacker News",
    time: "4h ago",
    tags: ["agent", "coding"],
  },
  {
    id: 3,
    title: "Gemini 2.0 Flash Achieves 1M Context",
    source: "Google AI Blog",
    time: "6h ago",
    tags: ["gemini", "google"],
  },
]

const quickPrompts = [
  { id: 1, name: "Agent Coder v2", category: "system", tokens: 1250 },
  { id: 2, name: "Code Reviewer", category: "template", tokens: 890 },
  { id: 3, name: "Documentation Writer", category: "template", tokens: 560 },
]

export default function Dashboard() {
  return (
    <ScrollArea className="h-full">
      <div className="max-w-6xl mx-auto space-y-6">
        {/* Welcome Header */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent">
            Welcome back, 大明
          </h1>
          <p className="text-muted-foreground">
            Your AI workstation is ready. Here&apos;s what&apos;s happening in the AI world.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-4 gap-4">
          {welcomeStats.map((stat) => (
            <Card
              key={stat.label}
              className="bg-gradient-to-br from-muted/50 to-muted/30 border-border/50 hover:border-violet-500/30 transition-all"
            >
              <CardContent className="p-4 flex items-center gap-4">
                <span className="text-3xl">{stat.icon}</span>
                <div>
                  <div className="text-2xl font-bold">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-3 gap-6">
          {/* Recent News */}
          <Card className="col-span-2 bg-gradient-to-br from-muted/30 to-transparent border-border/50">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle className="flex items-center gap-2">
                    <span>📊</span> Latest AI News
                  </CardTitle>
                  <CardDescription>From Pulse Reader</CardDescription>
                </div>
                <Button variant="ghost" size="sm" className="text-violet-400">
                  View All →
                </Button>
              </div>
            </CardHeader>
            <CardContent className="space-y-3">
              {recentNews.map((news) => (
                <div
                  key={news.id}
                  className="p-3 rounded-lg bg-background/50 hover:bg-violet-500/5 border border-transparent hover:border-violet-500/20 transition-all cursor-pointer"
                >
                  <div className="font-medium">{news.title}</div>
                  <div className="flex items-center gap-2 mt-2 text-xs text-muted-foreground">
                    <span>{news.source}</span>
                    <span>•</span>
                    <span>{news.time}</span>
                    <div className="flex-1" />
                    {news.tags.map((tag) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className="text-xs bg-violet-500/10 text-violet-400"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Quick Prompts */}
          <Card className="bg-gradient-to-br from-muted/30 to-transparent border-border/50">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <span>📝</span> Quick Prompts
              </CardTitle>
              <CardDescription>Your saved templates</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2">
              {quickPrompts.map((prompt) => (
                <div
                  key={prompt.id}
                  className="p-3 rounded-lg bg-background/50 hover:bg-violet-500/5 border border-transparent hover:border-violet-500/20 transition-all cursor-pointer"
                >
                  <div className="font-medium text-sm">{prompt.name}</div>
                  <div className="flex items-center gap-2 mt-1 text-xs text-muted-foreground">
                    <Badge variant="outline" className="text-xs">
                      {prompt.category}
                    </Badge>
                    <span>{prompt.tokens} tokens</span>
                  </div>
                </div>
              ))}
              <Button
                variant="outline"
                className="w-full mt-2 border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10"
              >
                + New Prompt
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Keyboard Shortcut Hint */}
        <div className="text-center text-sm text-muted-foreground">
          Press <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">Ctrl + K</kbd> to open command bar
        </div>
      </div>
    </ScrollArea>
  )
}
