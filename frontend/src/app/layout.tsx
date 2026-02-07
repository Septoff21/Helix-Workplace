import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { AppSidebar, SidebarProvider } from "@/components/layout/AppSidebar";
import { QuickPanel } from "@/components/layout/QuickPanel";
import { StatusBar } from "@/components/layout/StatusBar";
import { CommandBar } from "@/components/layout/CommandBar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Helix Workplace | AI Workstation",
  description: "Personal AGI Workstation for Heavy AI Users",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SidebarProvider>
          <div className="flex h-screen w-full bg-gradient-to-br from-background via-background to-violet-950/10">
            {/* Left Sidebar */}
            <AppSidebar />

            {/* Main Content Area */}
            <div className="flex-1 flex flex-col min-w-0">
              {/* Main Content */}
              <main className="flex-1 overflow-auto p-6">
                {children}
              </main>

              {/* Bottom Status Bar */}
              <StatusBar />
            </div>

            {/* Right Quick Panel */}
            <QuickPanel />
          </div>

          {/* Global Command Bar (Ctrl+K) */}
          <CommandBar />
        </SidebarProvider>
      </body>
    </html>
  );
}
