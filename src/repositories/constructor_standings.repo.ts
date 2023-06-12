import ConstructorStanding, {
  IConstructorStanding,
} from "../models/constructor_standings.model";

import Constructor, { IConstructor } from "../models/constructors.model";

export const getConstructorsByRace = (arrRaceId) => {
  return ConstructorStanding.find({ raceId: { $in: arrRaceId } }).select({
    constructorId: 1,
  });
};
