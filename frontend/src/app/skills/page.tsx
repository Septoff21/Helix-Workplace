import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function SkillsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">⚡ Skills</h1>
                <p className="text-muted-foreground">MCP Skills and automation chains</p>
            </div>
            <Card className="bg-muted/30 border-border/50">
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Skill library, chain editor, and execution logs will be available here.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
