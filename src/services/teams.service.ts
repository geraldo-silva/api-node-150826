import { Team } from "../types";
import { TeamsRepository } from "../repositories/teams.repository";

export class TeamsService {
  private teamsRepository: TeamsRepository;

  constructor() {
    this.teamsRepository = new TeamsRepository();
  }

  getAllTeams(): Team[] {
    return this.teamsRepository.findAll();
  }

  getTeamById(id: number): Team | undefined {
    return this.teamsRepository.findById(id);
  }
}
