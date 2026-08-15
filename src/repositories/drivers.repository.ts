import { Driver } from "../types";
import { driversData } from "../data/drivers.data";

export class DriversRepository {
  findAll(): Driver[] {
    return driversData;
  }

  findById(id: number): Driver | undefined {
    return driversData.find((driver) => driver.id === id);
  }
}
