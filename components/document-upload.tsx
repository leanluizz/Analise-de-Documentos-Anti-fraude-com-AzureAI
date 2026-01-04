"use client"

import type React from "react"

import { useState, useCallback } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Upload, FileText, X, CheckCircle2, AlertCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface UploadedFile {
  id: string
  file: File
  status: "pending" | "uploading" | "analyzing" | "complete" | "error"
  progress: number
  result?: {
    score: number
    risk: "low" | "medium" | "high"
    documentType: string
  }
  error?: string
}

export function DocumentUpload() {
  const router = useRouter()
  const [files, setFiles] = useState<UploadedFile[]>([])
  const [isDragging, setIsDragging] = useState(false)

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(true)
  }, [])

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
  }, [])

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)

    const droppedFiles = Array.from(e.dataTransfer.files).filter((file) =>
      ["image/jpeg", "image/png", "image/jpg", "application/pdf"].includes(file.type),
    )

    addFiles(droppedFiles)
  }, [])

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      addFiles(Array.from(e.target.files))
    }
  }

  const addFiles = (newFiles: File[]) => {
    const uploadedFiles: UploadedFile[] = newFiles.map((file) => ({
      id: Math.random().toString(36).substr(2, 9),
      file,
      status: "pending",
      progress: 0,
    }))

    setFiles((prev) => [...prev, ...uploadedFiles])
  }

  const removeFile = (id: string) => {
    setFiles((prev) => prev.filter((f) => f.id !== id))
  }

  const analyzeFiles = async () => {
    for (const file of files) {
      if (file.status !== "pending") continue

      try {
        // Update to uploading
        setFiles((prev) => prev.map((f) => (f.id === file.id ? { ...f, status: "uploading" as const } : f)))

        // Simulate upload progress
        for (let i = 0; i <= 100; i += 20) {
          await new Promise((resolve) => setTimeout(resolve, 200))
          setFiles((prev) => prev.map((f) => (f.id === file.id ? { ...f, progress: i } : f)))
        }

        // Update to analyzing
        setFiles((prev) => prev.map((f) => (f.id === file.id ? { ...f, status: "analyzing" as const } : f)))

        // Chamar API de análise
        const formData = new FormData()
        formData.append("file", file.file)

        const response = await fetch("/api/analyze", {
          method: "POST",
          body: formData,
        })

        if (!response.ok) {
          throw new Error("Erro na análise do documento")
        }

        const result = await response.json()

        console.log("[v0] Resultado da análise:", result)

        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id
              ? {
                  ...f,
                  status: "complete" as const,
                  progress: 100,
                  result: {
                    score: result.data.fraudAnalysis.overallScore,
                    risk: result.data.fraudAnalysis.riskLevel,
                    documentType: result.data.documentType,
                  },
                }
              : f,
          ),
        )
      } catch (error) {
        console.error("[v0] Erro ao analisar arquivo:", error)
        setFiles((prev) =>
          prev.map((f) =>
            f.id === file.id
              ? {
                  ...f,
                  status: "error" as const,
                  error: "Erro ao processar documento",
                }
              : f,
          ),
        )
      }
    }
  }

  const allComplete = files.length > 0 && files.every((f) => f.status === "complete")
  const hasFiles = files.length > 0

  return (
    <div className="space-y-6">
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle>Upload de Documentos</CardTitle>
          <CardDescription>
            Faça upload de RG, CNH, comprovantes ou outros documentos para análise anti-fraude
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            className={cn(
              "relative flex flex-col items-center justify-center rounded-lg border-2 border-dashed p-12 transition-colors",
              isDragging ? "border-primary bg-primary/5" : "border-border bg-muted/30",
              "hover:border-primary/50 hover:bg-primary/5",
            )}
          >
            <Upload className="mb-4 h-12 w-12 text-muted-foreground" />
            <div className="mb-2 text-center">
              <p className="text-sm font-medium">Arraste arquivos aqui ou clique para selecionar</p>
              <p className="text-xs text-muted-foreground">Suporta PDF, JPG, PNG (máx. 10MB por arquivo)</p>
            </div>
            <input
              type="file"
              multiple
              accept=".pdf,.jpg,.jpeg,.png"
              onChange={handleFileInput}
              className="absolute inset-0 cursor-pointer opacity-0"
            />
          </div>
        </CardContent>
      </Card>

      {hasFiles && (
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle>Arquivos Selecionados ({files.length})</CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            {files.map((file) => (
              <div key={file.id} className="flex items-center gap-3 rounded-lg border border-border bg-muted/30 p-4">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                  <FileText className="h-5 w-5 text-primary" />
                </div>

                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <p className="truncate text-sm font-medium">{file.file.name}</p>
                    {file.status === "complete" && file.result && (
                      <span
                        className={cn(
                          "text-xs font-medium px-2 py-0.5 rounded-full",
                          file.result.risk === "low" && "bg-green-500/10 text-green-500",
                          file.result.risk === "medium" && "bg-yellow-500/10 text-yellow-500",
                          file.result.risk === "high" && "bg-red-500/10 text-red-500",
                        )}
                      >
                        {file.result.risk === "low" && "Baixo Risco"}
                        {file.result.risk === "medium" && "Médio Risco"}
                        {file.result.risk === "high" && "Alto Risco"}
                      </span>
                    )}
                  </div>

                  <div className="flex items-center gap-2">
                    <p className="text-xs text-muted-foreground">{(file.file.size / 1024).toFixed(1)} KB</p>
                    {file.status === "pending" && <span className="text-xs text-muted-foreground">• Aguardando</span>}
                    {file.status === "uploading" && (
                      <span className="text-xs text-primary">• Enviando {file.progress}%</span>
                    )}
                    {file.status === "analyzing" && (
                      <span className="text-xs text-secondary">• Analisando com Azure AI...</span>
                    )}
                    {file.status === "complete" && file.result && (
                      <>
                        <span className="text-xs text-green-500">• Score: {file.result.score}%</span>
                        <span className="text-xs text-muted-foreground">• {file.result.documentType}</span>
                      </>
                    )}
                    {file.status === "error" && <span className="text-xs text-destructive">• {file.error}</span>}
                  </div>

                  {(file.status === "uploading" || file.status === "analyzing") && (
                    <Progress value={file.status === "uploading" ? file.progress : 100} className="mt-2 h-1" />
                  )}
                </div>

                <div className="flex items-center gap-2">
                  {file.status === "complete" && <CheckCircle2 className="h-5 w-5 text-green-500" />}
                  {file.status === "error" && <AlertCircle className="h-5 w-5 text-destructive" />}
                  {file.status === "pending" && (
                    <Button size="icon" variant="ghost" onClick={() => removeFile(file.id)}>
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      )}

      {hasFiles && (
        <div className="flex gap-3">
          <Button
            onClick={analyzeFiles}
            disabled={files.every((f) => f.status !== "pending")}
            className="flex-1"
            size="lg"
          >
            {allComplete ? "Análise Concluída" : "Iniciar Análise"}
          </Button>
          {allComplete && (
            <Button onClick={() => router.push("/dashboard")} variant="secondary" size="lg">
              Ver Resultados
            </Button>
          )}
        </div>
      )}
    </div>
  )
}
