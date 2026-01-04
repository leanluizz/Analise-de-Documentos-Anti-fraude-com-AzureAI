import { Header } from "@/components/header"
import { DocumentUpload } from "@/components/document-upload"
import { Card, CardContent } from "@/components/ui/card"
import { Shield, Zap, Lock, CheckCircle2 } from "lucide-react"

export default function UploadPage() {
  return (
    <div className="min-h-screen">
      <Header />

      <div className="container py-12">
        <div className="mb-8">
          <h1 className="mb-2 text-3xl font-bold tracking-tight">Análise de Documentos</h1>
          <p className="text-muted-foreground">Faça upload dos documentos para verificação automática com Azure AI</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <DocumentUpload />
          </div>

          <div className="space-y-6">
            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">O que analisamos</h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Autenticidade do documento</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Sinais de adulteração ou edição</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Consistência de dados</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Qualidade da imagem</p>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <p className="text-sm text-muted-foreground">Metadados suspeitos</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-border bg-card">
              <CardContent className="p-6">
                <h3 className="mb-4 font-semibold">Segurança Garantida</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Shield className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Criptografia Total</p>
                      <p className="text-xs text-muted-foreground">Dados protegidos em trânsito e repouso</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-secondary/10">
                      <Zap className="h-4 w-4 text-secondary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Processamento Rápido</p>
                      <p className="text-xs text-muted-foreground">Resultados em menos de 3 segundos</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Lock className="h-4 w-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">Conformidade LGPD</p>
                      <p className="text-xs text-muted-foreground">100% em conformidade legal</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-primary/20 bg-primary/5">
              <CardContent className="p-6">
                <p className="text-sm text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Dica:</strong> Para melhores resultados, certifique-se de que os
                  documentos estão bem iluminados, sem reflexos e com todas as informações visíveis.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
