import { createServer } from "./config/server";
import { teamsRoutes } from "./routes/teams.routes";
import { driversRoutes } from "./routes/drivers.routes";

async function start() {
  const server = createServer();

  server.register(teamsRoutes);
  server.register(driversRoutes);

  server.listen({ port: 3333 }, () => {
    console.log("Server init");
  });
}

start();
