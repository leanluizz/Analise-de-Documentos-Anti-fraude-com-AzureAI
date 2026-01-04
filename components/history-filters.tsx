"use client"

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Filter } from "lucide-react"

export function HistoryFilters() {
  return (
    <div className="flex flex-col gap-4 sm:flex-row">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="Buscar por nome de arquivo ou ID..." className="pl-9" />
      </div>
      <Select defaultValue="all">
        <SelectTrigger className="sm:w-[180px]">
          <Filter className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Tipo" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos os tipos</SelectItem>
          <SelectItem value="cnh">CNH</SelectItem>
          <SelectItem value="rg">RG</SelectItem>
          <SelectItem value="comprovante">Comprovante</SelectItem>
          <SelectItem value="passaporte">Passaporte</SelectItem>
        </SelectContent>
      </Select>
      <Select defaultValue="all">
        <SelectTrigger className="sm:w-[180px]">
          <Filter className="mr-2 h-4 w-4" />
          <SelectValue placeholder="Risco" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">Todos os níveis</SelectItem>
          <SelectItem value="low">Baixo Risco</SelectItem>
          <SelectItem value="medium">Médio Risco</SelectItem>
          <SelectItem value="high">Alto Risco</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}
