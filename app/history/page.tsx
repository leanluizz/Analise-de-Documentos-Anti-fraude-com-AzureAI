import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { HistoryFilters } from "@/components/history-filters"
import { FileText, Eye, Download } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Mock data
const historyData = [
  {
    id: "ANL-2024-001",
    fileName: "CNH-2024-01-15.pdf",
    documentType: "CNH",
    score: 87,
    risk: "low" as const,
    analyzedAt: "2024-01-15T14:32:00",
    status: "complete",
  },
  {
    id: "ANL-2024-002",
    fileName: "RG-Frente-Verso.jpg",
    documentType: "RG",
    score: 76,
    risk: "medium" as const,
    analyzedAt: "2024-01-15T13:18:00",
    status: "complete",
  },
  {
    id: "ANL-2024-003",
    fileName: "Comprovante-Residencia.pdf",
    documentType: "Comprovante",
    score: 88,
    risk: "low" as const,
    analyzedAt: "2024-01-15T11:45:00",
    status: "complete",
  },
  {
    id: "ANL-2024-004",
    fileName: "CNH-Suspeita.jpg",
    documentType: "CNH",
    score: 45,
    risk: "high" as const,
    analyzedAt: "2024-01-14T16:23:00",
    status: "flagged",
  },
  {
    id: "ANL-2024-005",
    fileName: "RG-Cliente-2024.pdf",
    documentType: "RG",
    score: 94,
    risk: "low" as const,
    analyzedAt: "2024-01-14T15:01:00",
    status: "complete",
  },
  {
    id: "ANL-2024-006",
    fileName: "Passaporte-Brasil.pdf",
    documentType: "Passaporte",
    score: 91,
    risk: "low" as const,
    analyzedAt: "2024-01-14T10:15:00",
    status: "complete",
  },
  {
    id: "ANL-2024-007",
    fileName: "Comprovante-Conta-Luz.jpg",
    documentType: "Comprovante",
    score: 68,
    risk: "medium" as const,
    analyzedAt: "2024-01-13T17:42:00",
    status: "review",
  },
  {
    id: "ANL-2024-008",
    fileName: "CNH-Digital-2024.pdf",
    documentType: "CNH",
    score: 96,
    risk: "low" as const,
    analyzedAt: "2024-01-13T14:28:00",
    status: "complete",
  },
]

export default function HistoryPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container py-8">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Histórico de Análises</h1>
          <p className="text-muted-foreground">Visualize e gerencie todas as análises de documentos realizadas</p>
        </div>

        {/* Filters */}
        <Card className="mb-6 border-border bg-card">
          <CardContent className="p-6">
            <HistoryFilters />
          </CardContent>
        </Card>

        {/* History Table */}
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Análises Realizadas</CardTitle>
            <CardDescription>{historyData.length} documentos analisados</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {historyData.map((item) => (
                <div
                  key={item.id}
                  className="flex items-center gap-4 rounded-lg border border-border bg-muted/30 p-4 hover:bg-muted/50 transition-colors"
                >
                  <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>

                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="truncate text-sm font-medium">{item.fileName}</p>
                      <Badge variant="outline" className="text-xs">
                        {item.documentType}
                      </Badge>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs",
                          item.status === "complete" && "bg-green-500/10 text-green-500",
                          item.status === "review" && "bg-yellow-500/10 text-yellow-500",
                          item.status === "flagged" && "bg-red-500/10 text-red-500",
                        )}
                      >
                        {item.status === "complete" && "Completo"}
                        {item.status === "review" && "Em Revisão"}
                        {item.status === "flagged" && "Sinalizado"}
                      </Badge>
                    </div>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground">
                      <span>{item.id}</span>
                      <span>•</span>
                      <span>{new Date(item.analyzedAt).toLocaleDateString("pt-BR")}</span>
                      <span>
                        {new Date(item.analyzedAt).toLocaleTimeString("pt-BR", { hour: "2-digit", minute: "2-digit" })}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4">
                    <div className="text-right">
                      <div className="text-lg font-semibold">{item.score}%</div>
                      <Badge
                        variant="secondary"
                        className={cn(
                          "text-xs",
                          item.risk === "low" && "bg-green-500/10 text-green-500 hover:bg-green-500/20",
                          item.risk === "medium" && "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
                          item.risk === "high" && "bg-red-500/10 text-red-500 hover:bg-red-500/20",
                        )}
                      >
                        {item.risk === "low" && "Baixo"}
                        {item.risk === "medium" && "Médio"}
                        {item.risk === "high" && "Alto"}
                      </Badge>
                    </div>

                    <div className="flex gap-1">
                      <Button size="icon" variant="ghost" asChild>
                        <Link href={`/results/${item.id}`}>
                          <Eye className="h-4 w-4" />
                        </Link>
                      </Button>
                      <Button size="icon" variant="ghost">
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
