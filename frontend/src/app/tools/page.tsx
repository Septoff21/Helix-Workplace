import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ToolsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">🛠️ Tools</h1>
                <p className="text-muted-foreground">AI tools directory</p>
            </div>
            <Card className="bg-muted/30 border-border/50">
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Cursor, Antigravity, Manus, and other AI tool guides will be available here.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
