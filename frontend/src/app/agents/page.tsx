import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function AgentsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">🤖 Agents</h1>
                <p className="text-muted-foreground">Manage your AI agents</p>
            </div>
            <Card className="bg-muted/30 border-border/50">
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Agent creation, skill binding, and task execution will be available here.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
