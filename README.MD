Formula One API

API Node.js com Fastify e TypeScript, implementada com arquitetura em camadas mínimas.

Tecnologias

- Node.js v20+
- TypeScript v5.4
- Fastify v4.26
- CORS

Arquitetura em Camadas

src/
  types/           Definição de interfaces e tipos (Team, Driver)
  data/            Dados mock ou modelos (teams.data, drivers.data)
  repositories/    Camada de acesso aos dados (TeamsRepository, DriversRepository)
  services/        Lógica de negócio (TeamsService, DriversService)
  routes/          Endpoints da API (teams.routes, drivers.routes)
  config/          Configuração do servidor (server.ts)
  server.ts        Ponto de entrada da aplicação

Estrutura das Camadas

Data Layer: Armazena os dados brutos (atualmente em memória)
Repository Layer: Interface entre dados e regras de negócio
Service Layer: Contém a lógica de negócio e validações
Routes Layer: Define os endpoints HTTP da API

Scripts

npm run dist       Compila TypeScript para JavaScript
npm run start:dev  Inicia o servidor em modo desenvolvimento
npm run start:watch Inicia com auto-reload em alterações
npm run start:dist Compila e executa a versão compilada

Endpoints

GET /teams          Lista todas as equipes
GET /teams/:id      Obtém uma equipe específica
GET /drivers        Lista todos os pilotos
GET /drivers/:id    Obtém um piloto específico

Como Usar

1. Clone o repositório
2. Instale as dependências: npm install
3. Inicie o servidor: npm run start:dev
4. Acesse http://localhost:3333
