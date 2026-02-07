"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import {
    CommandDialog,
    CommandEmpty,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "@/components/ui/command"

const pages = [
    { name: "Dashboard", href: "/", icon: "🏠" },
    { name: "Pulse Reader", href: "/pulse", icon: "📊" },
    { name: "Prompt Forge", href: "/prompt", icon: "📝" },
    { name: "Skills", href: "/skills", icon: "⚡" },
    { name: "Files", href: "/files", icon: "📁" },
    { name: "Model Sentinel", href: "/models", icon: "🔍" },
    { name: "Tools", href: "/tools", icon: "🛠️" },
    { name: "Agents", href: "/agents", icon: "🤖" },
]

const quickActions = [
    { name: "Send Email", action: "skill:email", icon: "📧" },
    { name: "Run Scraper", action: "skill:scraper", icon: "🕷️" },
    { name: "New Prompt", action: "prompt:new", icon: "➕" },
    { name: "New Agent", action: "agent:new", icon: "🤖" },
]

export function CommandBar() {
    const [open, setOpen] = React.useState(false)
    const router = useRouter()

    React.useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                e.preventDefault()
                setOpen((open) => !open)
            }
        }

        document.addEventListener("keydown", down)
        return () => document.removeEventListener("keydown", down)
    }, [])

    const handleSelect = (value: string) => {
        setOpen(false)
        if (value.startsWith("/")) {
            router.push(value)
        } else {
            // Handle actions
            console.log("Action:", value)
        }
    }

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Type a command or search..." />
            <CommandList>
                <CommandEmpty>No results found.</CommandEmpty>

                <CommandGroup heading="Navigation">
                    {pages.map((page) => (
                        <CommandItem
                            key={page.href}
                            value={page.href}
                            onSelect={handleSelect}
                            className="gap-3"
                        >
                            <span className="text-lg">{page.icon}</span>
                            <span>{page.name}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>

                <CommandSeparator />

                <CommandGroup heading="Quick Actions">
                    {quickActions.map((action) => (
                        <CommandItem
                            key={action.action}
                            value={action.action}
                            onSelect={handleSelect}
                            className="gap-3"
                        >
                            <span className="text-lg">{action.icon}</span>
                            <span>{action.name}</span>
                        </CommandItem>
                    ))}
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    )
}
