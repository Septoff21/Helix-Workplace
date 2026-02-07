import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function PulsePage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">📊 Pulse Reader</h1>
                <p className="text-muted-foreground">Real-time AI news and updates</p>
            </div>
            <Card className="bg-muted/30 border-border/50">
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        RSS feeds, GitHub Trending, and social media tracking will be integrated here.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
