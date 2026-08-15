import { Team } from "../types";
import { teamsData } from "../data/teams.data";

export class TeamsRepository {
  findAll(): Team[] {
    return teamsData;
  }

  findById(id: number): Team | undefined {
    return teamsData.find((team) => team.id === id);
  }
}
