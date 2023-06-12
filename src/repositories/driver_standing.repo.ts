import DriverStanding, {
  IDriverStanding,
} from "../models/driver_standings.model";
import Driver, { IDriver } from "../models/drivers.model";
export const getDirverByRace = (arrRaceId) => {
  return DriverStanding.find({ raceId: { $in: arrRaceId } })
    .select({ driverId: 1 })
    .populate({
      path: "driverId",
      model: Driver,
    });
};
