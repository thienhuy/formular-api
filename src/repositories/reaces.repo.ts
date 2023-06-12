import Race, { IRace } from "../models/races.model";

export const getBySeason = (year: number) => {
  return Race.find({ year });
};
