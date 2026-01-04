import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Header } from "@/components/header"
import {
  Shield,
  FileCheck,
  Zap,
  Lock,
  Brain,
  CheckCircle2,
  ArrowRight,
  Upload,
  Search,
  AlertTriangle,
} from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <section className="relative overflow-hidden border-b border-border/40">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f12_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f12_1px,transparent_1px)] bg-[size:14px_24px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background" />

        <div className="container relative py-24 lg:py-32 m-auto">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-muted px-4 py-1.5 text-sm">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-muted-foreground">Powered by Azure AI</span>
            </div>

            <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight sm:text-6xl">
              Detecte fraudes em documentos com <span className="text-primary">Inteligência Artificial</span>
            </h1>

            <p className="mb-10 text-pretty text-lg text-muted-foreground leading-relaxed">
              Análise avançada de RG, CNH, comprovantes e outros documentos usando Azure AI. Detecção automática de
              adulterações, inconsistências e padrões suspeitos em segundos.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="w-full sm:w-auto" asChild>
                <Link href="/upload">
                  Começar Análise
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent" asChild>
                <Link href="/#how-it-works">Como Funciona</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="border-b border-border/40 bg-muted/30 m-auto">
        <div className="container py-12">
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Precisão</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">{"<3s"}</div>
              <div className="text-sm text-muted-foreground">Tempo de Análise</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">15+</div>
              <div className="text-sm text-muted-foreground">Tipos de Documentos</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Disponibilidade</div>
            </div>
          </div>
        </div>
      </section>
      <section id="features" className="container py-24 m-auto">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            Recursos Poderosos de Análise
          </h2>
          <p className="text-pretty text-lg text-muted-foreground">
            Tecnologia de ponta para proteger seu negócio contra fraudes documentais
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Brain className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">IA Avançada</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Powered by Azure AI Document Intelligence para detecção precisa de anomalias e padrões fraudulentos
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Zap className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Análise em Tempo Real</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Resultados instantâneos com processamento paralelo e otimizado para alta performance
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Múltiplos Formatos</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Suporte para RG, CNH, passaportes, comprovantes de residência e documentos corporativos
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <Lock className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Segurança Total</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Criptografia end-to-end, conformidade LGPD e armazenamento seguro de dados sensíveis
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Search className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Detecção Profunda</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Análise de metadados, verificação de autenticidade e comparação com bases de dados oficiais
              </p>
            </CardContent>
          </Card>

          <Card className="border-border bg-card">
            <CardContent className="p-6">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                <AlertTriangle className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">Alertas Inteligentes</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Sistema de scoring de risco com alertas automáticos para casos suspeitos
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      <section id="how-it-works" className="border-y border-border/40 bg-muted/30">
        <div className="container py-24 m-auto">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Como Funciona</h2>
            <p className="text-pretty text-lg text-muted-foreground">Processo simples e automatizado em 3 etapas</p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground text-2xl font-bold">
                1
              </div>
              <h3 className="mb-2 text-xl font-semibold">Upload do Documento</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Faça o upload do documento em formato PDF, JPG ou PNG. Nossa plataforma aceita múltiplos documentos
                simultaneamente
              </p>
              <Upload className="absolute -top-2 -right-2 h-8 w-8 text-primary/20" />
            </div>

            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-secondary text-secondary-foreground text-2xl font-bold">
                2
              </div>
              <h3 className="mb-2 text-xl font-semibold">Análise com IA</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Azure AI processa o documento, extraindo dados, verificando autenticidade e detectando possíveis
                adulterações
              </p>
              <Brain className="absolute -top-2 -right-2 h-8 w-8 text-secondary/20" />
            </div>

            <div className="relative">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-xl bg-primary text-primary-foreground text-2xl font-bold">
                3
              </div>
              <h3 className="mb-2 text-xl font-semibold">Resultado Detalhado</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Receba um relatório completo com score de confiança, alertas de risco e recomendações de ação
              </p>
              <FileCheck className="absolute -top-2 -right-2 h-8 w-8 text-primary/20" />
            </div>
          </div>
        </div>
      </section>
      <section id="security" className="container py-24 m-auto">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center justify-center rounded-full bg-primary/10 p-3">
            <Lock className="h-8 w-8 text-primary" />
          </div>
          <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">Segurança e Conformidade</h2>
          <p className="mb-8 text-pretty text-lg text-muted-foreground leading-relaxed">
            Seus dados estão protegidos com os mais altos padrões de segurança da indústria
          </p>

          <div className="grid gap-4 text-left sm:grid-cols-2">
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Criptografia End-to-End</div>
                <div className="text-sm text-muted-foreground">
                  Todos os dados são criptografados em trânsito e em repouso
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Conformidade LGPD</div>
                <div className="text-sm text-muted-foreground">100% em conformidade com a legislação brasileira</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Azure Security</div>
                <div className="text-sm text-muted-foreground">
                  Infraestrutura Microsoft Azure com certificações internacionais
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <CheckCircle2 className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
              <div>
                <div className="font-medium">Auditoria Completa</div>
                <div className="text-sm text-muted-foreground">Logs detalhados de todas as operações e acessos</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-t border-border/40 bg-muted/30">
        <div className="container py-24 m-auto">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-balance text-3xl font-bold tracking-tight sm:text-4xl">
              Pronto para proteger seu negócio?
            </h2>
            <p className="mb-8 text-pretty text-lg text-muted-foreground">
              Comece a analisar documentos agora e detecte fraudes antes que elas causem prejuízos
            </p>
            <Button size="lg" asChild>
              <Link href="/upload">
                Analisar Primeiro Documento
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      <footer className="border-t border-border/40">
        <div className="container py-8 m-auto">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <Shield className="h-5 w-5 text-primary" />
              <span className="text-sm font-medium">DocSecure AI</span>
            </div>
            <div className="text-sm text-muted-foreground">Powered by Azure AI Document Intelligence</div>
          </div>
        </div>
      </footer>
    </div>
  )
}
