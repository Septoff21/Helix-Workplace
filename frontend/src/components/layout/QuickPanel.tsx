"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"

const quickSkills = [
    { id: "email", name: "Send Mail", icon: "📧" },
    { id: "scraper", name: "Scraper", icon: "🕷️" },
    { id: "file", name: "File Ops", icon: "📁" },
    { id: "video", name: "Video AI", icon: "🎬" },
]

const activeAgents = [
    { id: "pulse-bot", name: "Pulse Bot", status: "idle", avatar: "🤖" },
]

export function QuickPanel() {
    return (
        <div className="w-64 border-l border-border/50 bg-background/50 backdrop-blur-sm flex flex-col">
            <div className="p-4 border-b border-border/50">
                <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide">
                    Quick Skills
                </h3>
            </div>

            <ScrollArea className="flex-1">
                <div className="p-3 space-y-2">
                    {quickSkills.map((skill) => (
                        <Button
                            key={skill.id}
                            variant="ghost"
                            className="w-full justify-start gap-3 h-10 hover:bg-violet-500/10 hover:text-violet-400 transition-all"
                        >
                            <span className="text-lg">{skill.icon}</span>
                            <span>{skill.name}</span>
                        </Button>
                    ))}
                </div>

                <Separator className="my-2" />

                <div className="p-4">
                    <h3 className="font-semibold text-sm text-muted-foreground uppercase tracking-wide mb-3">
                        Active Agents
                    </h3>
                    {activeAgents.map((agent) => (
                        <Card
                            key={agent.id}
                            className="p-3 bg-gradient-to-br from-muted/50 to-muted/30 border-border/50"
                        >
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">{agent.avatar}</span>
                                <div className="flex-1">
                                    <div className="font-medium text-sm">{agent.name}</div>
                                    <Badge
                                        variant="secondary"
                                        className="text-xs bg-emerald-500/20 text-emerald-400"
                                    >
                                        {agent.status}
                                    </Badge>
                                </div>
                            </div>
                        </Card>
                    ))}

                    <Button
                        variant="outline"
                        className="w-full mt-3 border-dashed border-violet-500/30 text-violet-400 hover:bg-violet-500/10"
                    >
                        + New Agent
                    </Button>
                </div>
            </ScrollArea>
        </div>
    )
}
