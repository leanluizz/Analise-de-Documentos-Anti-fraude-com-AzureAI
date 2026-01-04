import { Header } from "@/components/header"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Shield,
  AlertTriangle,
  CheckCircle2,
  XCircle,
  Download,
  Share2,
  ArrowLeft,
  Calendar,
  Clock,
} from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"

// Mock data - em produção viria de banco de dados
const analysisResult = {
  id: "ANL-2024-001",
  fileName: "CNH-2024-01-15.pdf",
  documentType: "CNH",
  analyzedAt: "2024-01-15T14:32:00",
  fileSize: 2456,
  overallScore: 87,
  riskLevel: "low" as const,
  confidence: 0.92,
  extractedFields: {
    nome: { value: "João da Silva Santos", confidence: 0.95 },
    cpf: { value: "123.456.789-00", confidence: 0.92 },
    rg: { value: "12.345.678-9", confidence: 0.89 },
    dataNascimento: { value: "15/03/1990", confidence: 0.94 },
    dataEmissao: { value: "10/01/2024", confidence: 0.88 },
    orgaoEmissor: { value: "DETRAN/SP", confidence: 0.91 },
    categoria: { value: "AB", confidence: 0.96 },
    numeroRegistro: { value: "12345678901", confidence: 0.93 },
  },
  fraudIndicators: [
    {
      type: "metadata_inconsistency",
      severity: "low" as const,
      description: "Metadados do arquivo indicam possível edição recente",
      evidence: "Data de criação posterior à data de emissão do documento",
    },
  ],
  recommendations: [
    "Documento aprovado para processamento",
    "Considerar validação adicional com base oficial DETRAN",
    "Manter registro da análise para auditoria",
  ],
  metadata: {
    pageCount: 1,
    detectedLanguage: "pt-BR",
    processingTime: "2.4s",
  },
}

export default function ResultsPage() {
  const riskColor =
    analysisResult.riskLevel === "low"
      ? "text-green-500"
      : analysisResult.riskLevel === "medium"
        ? "text-yellow-500"
        : "text-red-500"

  const riskBgColor =
    analysisResult.riskLevel === "low"
      ? "bg-green-500/10 border-green-500/20"
      : analysisResult.riskLevel === "medium"
        ? "bg-yellow-500/10 border-yellow-500/20"
        : "bg-red-500/10 border-red-500/20"

  return (
    <div className="min-h-screen">
      <Header />

      <div className="container py-8">
        <div className="mb-6">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/dashboard">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Voltar ao Dashboard
            </Link>
          </Button>
        </div>

        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-4">
            <div>
              <h1 className="mb-2 text-3xl font-bold tracking-tight">Resultado da Análise</h1>
              <p className="text-muted-foreground">{analysisResult.fileName}</p>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Share2 className="mr-2 h-4 w-4" />
                Compartilhar
              </Button>
              <Button variant="outline" size="sm">
                <Download className="mr-2 h-4 w-4" />
                Exportar PDF
              </Button>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Calendar className="h-4 w-4" />
              {new Date(analysisResult.analyzedAt).toLocaleDateString("pt-BR")}
            </div>
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4" />
              {new Date(analysisResult.analyzedAt).toLocaleTimeString("pt-BR")}
            </div>
            <Badge variant="outline">{analysisResult.id}</Badge>
          </div>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2 space-y-6">
            {/* Score Card */}
            <Card className={cn("border-2", riskBgColor)}>
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">Score de Confiança</p>
                    <div className="flex items-baseline gap-2">
                      <span className={cn("text-5xl font-bold", riskColor)}>{analysisResult.overallScore}</span>
                      <span className="text-2xl text-muted-foreground">/100</span>
                    </div>
                  </div>
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-background border-4 border-current">
                    {analysisResult.riskLevel === "low" && <CheckCircle2 className={cn("h-10 w-10", riskColor)} />}
                    {analysisResult.riskLevel === "medium" && <AlertTriangle className={cn("h-10 w-10", riskColor)} />}
                    {analysisResult.riskLevel === "high" && <XCircle className={cn("h-10 w-10", riskColor)} />}
                  </div>
                </div>

                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Nível de Risco</span>
                      <Badge
                        className={cn(
                          analysisResult.riskLevel === "low" && "bg-green-500/10 text-green-500 hover:bg-green-500/20",
                          analysisResult.riskLevel === "medium" &&
                            "bg-yellow-500/10 text-yellow-500 hover:bg-yellow-500/20",
                          analysisResult.riskLevel === "high" && "bg-red-500/10 text-red-500 hover:bg-red-500/20",
                        )}
                      >
                        {analysisResult.riskLevel === "low" && "Baixo"}
                        {analysisResult.riskLevel === "medium" && "Médio"}
                        {analysisResult.riskLevel === "high" && "Alto"}
                      </Badge>
                    </div>
                    <Progress value={analysisResult.overallScore} className="h-2" />
                  </div>

                  <div className="pt-4 border-t border-border">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">Confiança da IA</span>
                      <span className="font-medium">{(analysisResult.confidence * 100).toFixed(1)}%</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Extracted Fields */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Dados Extraídos</CardTitle>
                <CardDescription>Informações identificadas no documento</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-2">
                  {Object.entries(analysisResult.extractedFields).map(([key, field]) => (
                    <div key={key} className="rounded-lg border border-border bg-muted/30 p-3">
                      <div className="flex items-start justify-between gap-2 mb-1">
                        <p className="text-xs text-muted-foreground capitalize">{key.replace(/([A-Z])/g, " $1")}</p>
                        <span className="text-xs font-medium text-primary">{(field.confidence * 100).toFixed(0)}%</span>
                      </div>
                      <p className="text-sm font-medium">{field.value}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fraud Indicators */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Indicadores de Fraude</CardTitle>
                <CardDescription>
                  {analysisResult.fraudIndicators.length === 0
                    ? "Nenhum indicador de fraude detectado"
                    : `${analysisResult.fraudIndicators.length} indicador(es) encontrado(s)`}
                </CardDescription>
              </CardHeader>
              <CardContent>
                {analysisResult.fraudIndicators.length === 0 ? (
                  <div className="flex flex-col items-center justify-center py-8 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-500/10">
                      <Shield className="h-8 w-8 text-green-500" />
                    </div>
                    <p className="text-sm font-medium mb-1">Documento Limpo</p>
                    <p className="text-xs text-muted-foreground">Nenhuma irregularidade detectada</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {analysisResult.fraudIndicators.map((indicator, index) => (
                      <div
                        key={index}
                        className={cn(
                          "rounded-lg border p-4",
                          indicator.severity === "high" && "border-red-500/20 bg-red-500/5",
                          indicator.severity === "medium" && "border-yellow-500/20 bg-yellow-500/5",
                          indicator.severity === "low" && "border-blue-500/20 bg-blue-500/5",
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <AlertTriangle
                            className={cn(
                              "h-5 w-5 mt-0.5 flex-shrink-0",
                              indicator.severity === "high" && "text-red-500",
                              indicator.severity === "medium" && "text-yellow-500",
                              indicator.severity === "low" && "text-blue-500",
                            )}
                          />
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-1">
                              <p className="text-sm font-medium">{indicator.description}</p>
                              <Badge
                                variant="secondary"
                                className={cn(
                                  "text-xs",
                                  indicator.severity === "high" && "bg-red-500/10 text-red-500",
                                  indicator.severity === "medium" && "bg-yellow-500/10 text-yellow-500",
                                  indicator.severity === "low" && "bg-blue-500/10 text-blue-500",
                                )}
                              >
                                {indicator.severity === "high" && "Alta Severidade"}
                                {indicator.severity === "medium" && "Média Severidade"}
                                {indicator.severity === "low" && "Baixa Severidade"}
                              </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground">{indicator.evidence}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Recommendations */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Recomendações</CardTitle>
                <CardDescription>Ações sugeridas baseadas na análise</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  {analysisResult.recommendations.map((recommendation, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-sm text-muted-foreground">{recommendation}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="space-y-6">
            {/* Document Info */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Informações do Documento</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Tipo de Documento</p>
                  <Badge variant="outline" className="text-sm">
                    {analysisResult.documentType}
                  </Badge>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Tamanho do Arquivo</p>
                  <p className="text-sm font-medium">{(analysisResult.fileSize / 1024).toFixed(2)} MB</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Páginas</p>
                  <p className="text-sm font-medium">{analysisResult.metadata.pageCount}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Idioma Detectado</p>
                  <p className="text-sm font-medium">{analysisResult.metadata.detectedLanguage}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground mb-1">Tempo de Processamento</p>
                  <p className="text-sm font-medium">{analysisResult.metadata.processingTime}</p>
                </div>
              </CardContent>
            </Card>

            {/* Analysis Status */}
            <Card className="border-border bg-card">
              <CardHeader>
                <CardTitle>Status da Análise</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Upload Completo</p>
                    <p className="text-xs text-muted-foreground">Arquivo recebido</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Azure AI Processado</p>
                    <p className="text-xs text-muted-foreground">Documento analisado</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-500/10">
                    <CheckCircle2 className="h-4 w-4 text-green-500" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium">Fraude Verificada</p>
                    <p className="text-xs text-muted-foreground">Score calculado</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Action Card */}
            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <h3 className="mb-2 font-semibold text-sm">Próximos Passos</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">
                  {analysisResult.riskLevel === "low"
                    ? "O documento foi aprovado e pode ser processado normalmente. Mantenha este registro para fins de auditoria."
                    : analysisResult.riskLevel === "medium"
                      ? "Recomendamos validação adicional antes de processar. Considere verificar com fontes oficiais."
                      : "ATENÇÃO: Este documento apresenta alto risco de fraude. Verificação manual obrigatória antes de qualquer processamento."}
                </p>
                <Button className="w-full" size="sm" asChild>
                  <Link href="/upload">Analisar Novo Documento</Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
