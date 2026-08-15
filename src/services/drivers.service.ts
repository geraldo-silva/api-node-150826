import { Driver } from "../types";
import { DriversRepository } from "../repositories/drivers.repository";

export class DriversService {
  private driversRepository: DriversRepository;

  constructor() {
    this.driversRepository = new DriversRepository();
  }

  getAllDrivers(): Driver[] {
    return this.driversRepository.findAll();
  }

  getDriverById(id: number): Driver | undefined {
    return this.driversRepository.findById(id);
  }
}
