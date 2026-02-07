"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Badge } from "@/components/ui/badge"

const modules = [
  { id: "dashboard", name: "Dashboard", icon: "🏠", href: "/" },
  { id: "pulse", name: "Pulse Reader", icon: "📊", href: "/pulse", badge: "12" },
  { id: "prompt", name: "Prompt Forge", icon: "📝", href: "/prompt" },
  { id: "skills", name: "Skills", icon: "⚡", href: "/skills" },
  { id: "files", name: "Files", icon: "📁", href: "/files" },
  { id: "models", name: "Model Sentinel", icon: "🔍", href: "/models" },
  { id: "tools", name: "Tools", icon: "🛠️", href: "/tools" },
  { id: "agents", name: "Agents", icon: "🤖", href: "/agents" },
]

export function AppSidebar() {
  const pathname = usePathname()

  return (
    <Sidebar className="border-r border-border/50">
      <SidebarHeader className="border-b border-border/50 p-4">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🌀</span>
          <span className="font-bold text-lg bg-gradient-to-r from-violet-500 to-fuchsia-500 bg-clip-text text-transparent">
            Helix
          </span>
        </Link>
      </SidebarHeader>
      <SidebarContent className="p-2">
        <SidebarMenu>
          {modules.map((module) => (
            <SidebarMenuItem key={module.id}>
              <SidebarMenuButton
                asChild
                isActive={pathname === module.href}
                className={cn(
                  "w-full justify-start gap-3 px-3 py-2.5 rounded-lg transition-all",
                  pathname === module.href
                    ? "bg-gradient-to-r from-violet-500/10 to-fuchsia-500/10 text-violet-400"
                    : "hover:bg-muted/50"
                )}
              >
                <Link href={module.href}>
                  <span className="text-lg">{module.icon}</span>
                  <span className="flex-1">{module.name}</span>
                  {module.badge && (
                    <Badge variant="secondary" className="ml-auto bg-violet-500/20 text-violet-400 text-xs">
                      {module.badge}
                    </Badge>
                  )}
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  )
}

export { SidebarProvider, SidebarTrigger }
