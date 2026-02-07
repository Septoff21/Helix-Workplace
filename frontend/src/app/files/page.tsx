import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function FilesPage() {
    return (
        <div className="space-y-6">
            <div>
                <h1 className="text-2xl font-bold">📁 Files</h1>
                <p className="text-muted-foreground">Semantic file organization</p>
            </div>
            <Card className="bg-muted/30 border-border/50">
                <CardHeader>
                    <CardTitle>Coming Soon</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">
                        Smart file categorization, search, and auto-summarization will be available here.
                    </p>
                </CardContent>
            </Card>
        </div>
    )
}
