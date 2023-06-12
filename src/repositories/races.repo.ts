import Race, { IRace } from "../models/races.model";

export const getBySeason = (year: number) => {
  return Race.find({ year });
};

export const getByCircuitAndYear = (year: number, circuitId: number) => {
  return Race.find({ year, circuitId });
};
