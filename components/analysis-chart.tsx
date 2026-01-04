"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from "recharts"

const data = [
  { name: "Jan", analisados: 45, fraudulentos: 3 },
  { name: "Fev", analisados: 52, fraudulentos: 5 },
  { name: "Mar", analisados: 61, fraudulentos: 4 },
  { name: "Abr", analisados: 58, fraudulentos: 7 },
  { name: "Mai", analisados: 70, fraudulentos: 6 },
  { name: "Jun", analisados: 83, fraudulentos: 8 },
]

export function AnalysisChart() {
  return (
    <Card className="border-border bg-card">
      <CardHeader>
        <CardTitle>Análises Mensais</CardTitle>
        <CardDescription>Documentos processados e fraudes detectadas</CardDescription>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <CartesianGrid strokeDasharray="3 3" className="stroke-border" />
            <XAxis dataKey="name" className="text-xs text-muted-foreground" />
            <YAxis className="text-xs text-muted-foreground" />
            <Tooltip
              contentStyle={{
                backgroundColor: "hsl(var(--card))",
                border: "1px solid hsl(var(--border))",
                borderRadius: "8px",
              }}
            />
            <Legend />
            <Bar dataKey="analisados" fill="hsl(var(--primary))" name="Analisados" radius={[4, 4, 0, 0]} />
            <Bar dataKey="fraudulentos" fill="hsl(var(--destructive))" name="Fraudulentos" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}
