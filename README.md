# 🛡️ DocSecure AI - Sistema de Análise Anti-fraude de Documentos

Sistema completo de análise e detecção de fraudes em documentos utilizando **Azure AI Document Intelligence**. Identifica automaticamente adulterações, inconsistências e padrões suspeitos em documentos como RG, CNH, passaportes, comprovantes de residência e documentos corporativos.

![Next.js](https://img.shields.io/badge/Next.js-16-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue?style=flat-square&logo=typescript)
![Azure AI](https://img.shields.io/badge/Azure_AI-Document_Intelligence-0078D4?style=flat-square&logo=microsoft-azure)
![License](https://img.shields.io/badge/license-MIT-green?style=flat-square)

## ✨ Funcionalidades

### 🎯 Análise Inteligente
- **Detecção automática de fraudes** com IA treinada em padrões suspeitos
- **Score de confiança** de 0-100% para cada documento analisado
- **Classificação de risco** (Baixo, Médio, Alto) com base em múltiplos indicadores
- **Extração de dados** estruturados de campos importantes (nome, CPF, data de emissão, etc.)

### 📄 Tipos de Documentos Suportados
- **Identidade**: RG, CNH, Passaporte
- **Comprovantes**: Residência, Renda, Escolaridade
- **Corporativos**: Contratos, Faturas, Notas Fiscais
- **Formatos**: PDF, JPG, PNG (até 10MB por arquivo)

### 🔍 Indicadores de Fraude Detectados
- Inconsistências em metadados do arquivo
- Sinais de adulteração digital
- Qualidade de imagem incompatível com documento original
- Padrões de edição suspeitos
- Validação de autenticidade de campos

### 📊 Dashboard Executivo
- Visualização de métricas em tempo real
- Gráficos de análises mensais
- Histórico completo de documentos processados
- Filtros avançados por tipo e risco
- Exportação de relatórios em PDF

### 🔒 Segurança e Conformidade
- Criptografia end-to-end de dados sensíveis
- Conformidade total com LGPD
- Infraestrutura Azure com certificações internacionais
- Logs de auditoria detalhados

## 🚀 Tecnologias

- **Framework**: [Next.js 16](https://nextjs.org/) com App Router
- **Linguagem**: TypeScript 5.x
- **IA**: Azure AI Document Intelligence
- **UI**: 
  - [Tailwind CSS v4](https://tailwindcss.com/) para estilização
  - [shadcn/ui](https://ui.shadcn.com/) para componentes
  - [Recharts](https://recharts.org/) para visualização de dados
  - [Lucide Icons](https://lucide.dev/) para ícones
- **Validação**: Análise de metadados e padrões de fraude
- **Deployment**: Vercel (otimizado)

## 📋 Pré-requisitos

- Node.js 18+ instalado
- Conta Azure com acesso ao Document Intelligence
- npm ou yarn para gerenciamento de pacotes

## ⚙️ Instalação

### 1. Clone o repositório

```bash
git clone https://github.com/seu-usuario/docsecure-ai.git
cd docsecure-ai
```

### 2. Instale as dependências

```bash
npm install
# ou
yarn install
```

### 3. Configure as variáveis de ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Azure AI Document Intelligence (Obrigatório para produção)
AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT=https://seu-recurso.cognitiveservices.azure.com/
AZURE_DOCUMENT_INTELLIGENCE_KEY=sua-chave-api

# Configurações opcionais
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Execute o projeto

```bash
npm run dev
# ou
yarn dev
```

Acesse [http://localhost:3000](http://localhost:3000) no seu navegador.

## 🔧 Configuração do Azure AI

### Criar recurso Azure Document Intelligence

1. Acesse o [Portal Azure](https://portal.azure.com)
2. Crie um novo recurso "Azure AI Document Intelligence"
3. Após criação, acesse "Keys and Endpoint"
4. Copie a **Endpoint URL** e uma das **Keys**
5. Adicione as credenciais no arquivo `.env.local`

### Modelos disponíveis

O sistema utiliza o modelo **prebuilt-document** do Azure AI que oferece:
- Extração automática de campos
- OCR avançado para múltiplos idiomas
- Detecção de layout e estrutura
- Análise de qualidade de imagem

## 📁 Estrutura do Projeto

```
docsecure-ai/
├── app/                          # App Router do Next.js
│   ├── api/                      # API Routes
│   │   └── analyze/              # Endpoint de análise de documentos
│   ├── dashboard/                # Dashboard executivo
│   ├── history/                  # Histórico de análises
│   ├── results/[id]/             # Página de resultados detalhados
│   ├── upload/                   # Interface de upload
│   ├── layout.tsx                # Layout principal
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Estilos globais
├── components/                   # Componentes React
│   ├── ui/                       # Componentes shadcn/ui
│   ├── analysis-chart.tsx        # Gráfico de análises
│   ├── document-upload.tsx       # Upload de documentos
│   ├── header.tsx                # Cabeçalho
│   ├── history-filters.tsx       # Filtros do histórico
│   └── recent-analyses.tsx       # Lista de análises recentes
├── lib/                          # Utilitários e bibliotecas
│   ├── azure-document-intelligence.ts  # Integração Azure AI
│   └── utils.ts                  # Funções auxiliares
├── hooks/                        # React Hooks customizados
└── public/                       # Arquivos estáticos
```

## 🎨 Páginas e Rotas

| Rota | Descrição |
|------|-----------|
| `/` | Landing page com informações do produto |
| `/upload` | Interface de upload e análise de documentos |
| `/dashboard` | Dashboard com métricas e visualizações |
| `/history` | Histórico completo de análises |
| `/results/[id]` | Detalhes completos de uma análise específica |
| `/api/analyze` | API endpoint para processar documentos |

## 💻 Como Usar

### Análise de Documento

1. Acesse a página de **Upload** (`/upload`)
2. Arraste e solte ou clique para selecionar documentos
3. Clique em **Iniciar Análise**
4. Aguarde o processamento (geralmente < 3 segundos)
5. Visualize os resultados com score, risco e indicadores
6. Acesse o **Dashboard** para ver todas as análises

### Interpretação dos Resultados

- **Score 80-100%**: ✅ Baixo risco - Documento aprovado
- **Score 60-79%**: ⚠️ Médio risco - Verificação adicional recomendada
- **Score 0-59%**: 🚨 Alto risco - Verificação manual obrigatória

### Indicadores de Fraude

Cada documento analisado retorna indicadores específicos:

- **Severidade Baixa**: Atenção necessária, mas não crítico
- **Severidade Média**: Requer investigação adicional
- **Severidade Alta**: Forte indício de fraude, ação imediata necessária

## 🔌 API

### POST /api/analyze

Analisa um documento e retorna resultados anti-fraude.

**Request:**
```typescript
Content-Type: multipart/form-data

file: File (PDF, JPG, PNG - máx. 10MB)
```

**Response:**
```typescript
{
  "success": true,
  "data": {
    "fileName": "documento.pdf",
    "fileSize": 245678,
    "documentType": "RG",
    "extractedFields": {
      "nome": { "value": "João da Silva", "confidence": 0.95 },
      "cpf": { "value": "123.456.789-00", "confidence": 0.92 }
    },
    "fraudAnalysis": {
      "overallScore": 85,
      "riskLevel": "low",
      "confidence": 0.92,
      "indicators": [
        {
          "type": "metadata_inconsistency",
          "severity": "low",
          "description": "Metadados normais",
          "evidence": "Análise automatizada via Azure AI"
        }
      ],
      "recommendations": [
        "Documento aprovado para processamento"
      ]
    },
    "analyzedAt": "2026-01-04T10:30:00.000Z"
  }
}
```

## 🚢 Deploy

### Vercel (Recomendado)

1. Conecte seu repositório GitHub à Vercel
2. Configure as variáveis de ambiente:
   - `AZURE_DOCUMENT_INTELLIGENCE_ENDPOINT`
   - `AZURE_DOCUMENT_INTELLIGENCE_KEY`
3. Deploy automático a cada push

```bash
# Ou use a CLI do Vercel
npm i -g vercel
vercel
```

### Docker

```dockerfile
FROM node:18-alpine

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "start"]
```

## 🧪 Desenvolvimento

### Scripts disponíveis

```bash
npm run dev          # Inicia servidor de desenvolvimento
npm run build        # Cria build de produção
npm run start        # Inicia servidor de produção
npm run lint         # Executa linter
npm run type-check   # Verifica tipos TypeScript
```

### Modo de Demonstração

Para desenvolvimento local sem Azure AI configurado, o sistema opera em **modo simulação** que:
- Gera scores e análises fictícias
- Simula tempo de processamento realista
- Retorna indicadores de fraude aleatórios para testes

## 🤝 Contribuindo

Contribuições são bem-vindas! Para contribuir:

1. Faça fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona MinhaFeature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Roadmap

- [ ] Integração com múltiplos provedores de IA (OpenAI, Google Cloud Vision)
- [ ] Banco de dados para persistência real (Supabase/Neon)
- [ ] Sistema de autenticação de usuários
- [ ] API pública com rate limiting
- [ ] Webhooks para notificações em tempo real
- [ ] Análise em lote de múltiplos documentos
- [ ] Exportação de relatórios em múltiplos formatos
- [ ] Dashboard personalizado por usuário
- [ ] Integração com bases de dados oficiais (Receita Federal, Detran)

## 🐛 Problemas Conhecidos

- O modo simulação gera dados aleatórios para demonstração
- Upload de arquivos > 10MB é bloqueado (limite do Azure AI)
- Histórico usa dados mockados (implementar banco de dados)

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Suporte

Para suporte, envie um email para leandrolzz180@gmail.com ou abra uma issue no GitHub.

## 🙏 Agradecimentos

- [Vercel](https://vercel.com) pela plataforma de hospedagem
- [Microsoft Azure](https://azure.microsoft.com) pelo Azure AI Document Intelligence
- [shadcn](https://shadcn.com) pelos componentes UI de qualidade
- Comunidade Next.js e React

---

**Desenvolvido com ❤️ usando Next.js 16 e Azure AI**

🔗 [Demo Live](https://docsecure-ai.vercel.app) | 📧 [Contato](mailto:contato@docsecure.ai) | 🐦 [Twitter](https://twitter.com/docsecure)
