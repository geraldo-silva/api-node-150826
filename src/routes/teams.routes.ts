import { FastifyInstance } from "fastify";
import { TeamsService } from "../services/teams.service";

const teamsService = new TeamsService();

export async function teamsRoutes(server: FastifyInstance) {
  server.get("/teams", async (request, response) => {
    response.type("application/json").code(200);
    const teams = teamsService.getAllTeams();
    return { teams };
  });

  server.get<{ Params: { id: string } }>(
    "/teams/:id",
    async (request, response) => {
      const id = parseInt(request.params.id);
      const team = teamsService.getTeamById(id);

      if (!team) {
        response.type("application/json").code(404);
        return { message: "Team Not Found" };
      } else {
        response.type("application/json").code(200);
        return { team };
      }
    }
  );
}
