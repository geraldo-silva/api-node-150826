import { FastifyInstance } from "fastify";
import { DriversService } from "../services/drivers.service";

const driversService = new DriversService();

export async function driversRoutes(server: FastifyInstance) {
  server.get("/drivers", async (request, response) => {
    response.type("application/json").code(200);
    const drivers = driversService.getAllDrivers();
    return { drivers };
  });

  server.get<{ Params: { id: string } }>(
    "/drivers/:id",
    async (request, response) => {
      const id = parseInt(request.params.id);
      const driver = driversService.getDriverById(id);

      if (!driver) {
        response.type("application/json").code(404);
        return { message: "Driver Not Found" };
      } else {
        response.type("application/json").code(200);
        return { driver };
      }
    }
  );
}
