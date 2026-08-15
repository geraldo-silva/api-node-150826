import fastify from "fastify";
import cors from "@fastify/cors";

export function createServer() {
  const server = fastify({ logger: true });

  server.register(cors, {
    origin: "*",
  });

  return server;
}
