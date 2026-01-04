import { NextResponse } from "next/server"
import { analyzeDocumentWithAzureAI, calculateFraudScore } from "@/lib/azure-document-intelligence"

export async function POST(request: Request) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "Nenhum arquivo enviado" }, { status: 400 })
    }
    const validTypes = ["image/jpeg", "image/png", "image/jpg", "application/pdf"]
    if (!validTypes.includes(file.type)) {
      return NextResponse.json({ error: "Tipo de arquivo não suportado" }, { status: 400 })
    }

    const maxSize = 10 * 1024 * 1024 // 10MB
    if (file.size > maxSize) {
      return NextResponse.json({ error: "Arquivo muito grande (máx. 10MB)" }, { status: 400 })
    }
    const documentAnalysis = await analyzeDocumentWithAzureAI(file)
    const fraudAnalysis = calculateFraudScore(documentAnalysis)
    return NextResponse.json({
      success: true,
      data: {
        fileName: file.name,
        fileSize: file.size,
        documentType: documentAnalysis.documentType,
        extractedFields: documentAnalysis.fields,
        fraudAnalysis,
        analyzedAt: new Date().toISOString(),
      },
    })
  } catch (error) {
    console.error("[v0] Erro na análise:", error)
    return NextResponse.json({ error: "Erro ao processar documento" }, { status: 500 })
  }
}
