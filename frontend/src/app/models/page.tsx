import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ModelsPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">🔍 Model Sentinel</h1>
                <p className="text-muted-foreground">Model comparison and selection</p>
            </div>
            <Card className="bg-muted/30 border-border/50">
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Model comparison, vibe scores, and live latency tracking will be available here.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
