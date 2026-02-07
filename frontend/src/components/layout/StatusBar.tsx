"use client"

import { Badge } from "@/components/ui/badge"

export function StatusBar() {
    return (
        <div className="h-8 border-t border-border/50 bg-background/80 backdrop-blur-sm px-4 flex items-center justify-between text-xs text-muted-foreground">
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span>Connected</span>
                </div>
                <Badge variant="secondary" className="text-xs bg-violet-500/20 text-violet-400">
                    Pulse: 12 new
                </Badge>
                <Badge variant="secondary" className="text-xs bg-emerald-500/20 text-emerald-400">
                    Agents: 1 idle
                </Badge>
            </div>

            <div className="flex items-center gap-4">
                <span>Model: OpenRouter / gpt-4o-mini</span>
                <span>Tokens: 0</span>
                <span className="text-muted-foreground/50">v0.1.0</span>
            </div>
        </div>
    )
}
