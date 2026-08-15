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

```bash
# Clone this repository
$ git clone https://github.com/felipeAguiarCode/node-blue-boilerplate

# Go into the repository
$ cd node-blue-boilerplate

# Install dependencies
$ npm install
```

## Author

| [<img src="https://avatars3.githubusercontent.com/u/37452836?s=96&v=4"><br><sub>Felipe Aguiar</sub>](https://github.com/felipeAguiarCode) |
| :---------------------------------------------------------------------------------------------------------------------------------------: |
|                                            [Linkedin](www.linkedin.com/in/felipe-aguiar-exe/)                                             |

# Credits

icons by [Pino Lamanna][dribble-icon]

[typescript]: https://www.typescriptlang.org/
[typescript-5-4]: https://www.typescriptlang.org/
[ts-badge]: https://img.shields.io/badge/TypeScript-5.4-blue.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2020.00-blue.svg
[nodejs]: https://nodejs.org/
[dribble-icon]: https://dribbble.com/Schakalwal
[typescript-npm]: https://www.npmjs.com/package/typescript
[tsx-npm]: https://www.npmjs.com/package/tsx
[tsup-npm]: https://www.npmjs.com/package/tsup
[@types/node-npm]: https://www.npmjs.com/package/@types/node
