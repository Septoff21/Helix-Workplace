import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PromptPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">📝 Prompt Forge</h1>
                <p className="text-muted-foreground">Manage and optimize your prompts</p>
            </div>
            <Card className="bg-muted/30 border-border/50">
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Prompt templates, version control, and token auditing will be available here.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
