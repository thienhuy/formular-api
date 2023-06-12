import { Request, Response } from "express";

import * as seasonRepo from "../repositories/seasons.repo";
import * as raceRepo from "../repositories/reaces.repo";
import * as driverStadingRepo from "../repositories/driver_standing.repo";
import * as constructorStadingRepo from "../repositories/constructor_standings.repo";
import * as constructorRepo from "../repositories/constructors.repo";
import * as circultRepo from "../repositories/circults.repo";
import * as driverRepo from "../repositories/drivers.repo";
import * as resultRepo from "../repositories/results.repo";

export const getAll = async (req: Request, res: Response) => {
  try {
    const data = await seasonRepo.getAll();
    res.status(200).send({ status: "success", data });
  } catch (error) {
    res.status(400).json({ message: (error as Error).message });
  }
};

export const getBySeason = async (req: Request, res: Response) => {
  try {
    const year = Number(req.query.year);
    const type = req.query.type;
    const raceData = await raceRepo.getBySeason(year);
    const arrRaceId = [];
    const arrCircultId = [];
    raceData.forEach((e) => {
      arrRaceId.push(Number(e._id));
      arrCircultId.push(Number(e.circuitId));
    });

    switch (type) {
      case "drivers":
        const driverStanding = await driverStadingRepo.getDirverByRace(
          arrRaceId
        );
        const arrDriverId = [];
        driverStanding.forEach((e) => {
          arrDriverId.push(e.driverId);
        });
        const uniqueArrayDriver = arrDriverId.filter((item, pos, self) => {
          return self.indexOf(item) == pos;
        });
        const dataDriver = await driverRepo.getDriver(uniqueArrayDriver);
        res.status(200).send({ status: "success", data: dataDriver, type });
        break;
      case "teams":
        const constructorStanding =
          await constructorStadingRepo.getConstructorsByRace(arrRaceId);
        const arrConstructorId = [];
        constructorStanding.forEach((e) => {
          arrConstructorId.push(e.constructorId);
        });
        const uniqueArray = arrConstructorId.filter((item, pos, self) => {
          return self.indexOf(item) == pos;
        });
        const dataConstructor = await constructorRepo.getConstructor(
          uniqueArray
        );
        res
          .status(200)
          .send({ status: "success", data: dataConstructor, type });
        break;
      default:
        const raceResult = await resultRepo.getAllResult(arrRaceId);
        const circult = await circultRepo.getCircultByRace(arrCircultId);
        res
          .status(200)
          .send({ status: "success", data: circult, result: raceResult, type });
    }
  } catch (error) {
    res.status(400).send({ message: (error as Error).message });
  }
};
