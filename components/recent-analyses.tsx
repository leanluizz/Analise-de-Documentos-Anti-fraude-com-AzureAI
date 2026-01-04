"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { FileText, Eye } from "lucide-react"
import { cn } from "@/lib/utils"

const recentAnalyses = [
  {
    id: "1",
    document: "CNH-2024-01-15.pdf",
    type: "CNH",
    score: 92,
    risk: "low" as const,
    date: "Hoje às 14:32",
  },
  {
    id: "2",
    document: "RG-Frente-Verso.jpg",
    type: "RG",
    score: 76,
    risk: "medium" as const,
    date: "Hoje às 13:18",
  },
  {
    id: "3",
    document: "Comprovante-Residencia.pdf",
    type: "Comprovante",
    score: 88,
    risk: "low" as const,
    date: "Hoje às 11:45",
  },
  {
    id: "4",
    document: "CNH-Suspeita.jpg",
    type: "CNH",
    score: 45,
    risk: "high" as const,
    date: "Ontem às 16:23",
  },
  {
    id: "5",
    document: "RG-Cliente-2024.pdf",
    type: "RG",
    score: 94,
    risk: "low" as const,
    date: "Ontem às 15:01",
  },
]

export function RecentAnalyses() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle>Análises Recentes</CardTitle>
        <CardDescription>Últimos documentos processados pelo sistema</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          {recentAnalyses.map((analysis) => (
            <div
              key={analysis.id}
              className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-3 hover:bg-muted/50 transition-colors"
            >
              <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                <FileText className="h-5 w-5 text-primary" />
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="truncate text-sm font-medium">{analysis.document}</p>
                  <Badge variant="outline" className="text-xs">
                    {analysis.type}
                  </Badge>
                </div>
                <p className="text-xs text-muted-foreground">{analysis.date}</p>
              </div>

              <div className="flex items-center gap-3">
                <div className="text-right">
                  <div className="text-sm font-semibold">{analysis.score}%</div>
                  <Badge
                    variant="secondary"
                    className={cn(
                      "text-xs",
                      analysis.risk === "low" && "bg-green-500/10 text-green-500 hover:bg-green-500/20",
                      analysis.risk === "medium" && "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
                      analysis.risk === "high" && "bg-red-500/10 text-red-500 hover:bg-red-500/20",
                    )}
                  >
                    {analysis.risk === "low" && "Baixo"}
                    {analysis.risk === "medium" && "Médio"}
                    {analysis.risk === "high" && "Alto"}
                  </Badge>
                </div>

                <Button size="icon" variant="ghost">
                  <Eye className="h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
