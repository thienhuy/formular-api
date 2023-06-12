import Circuit, { ICircuit } from "../models/circuits.model";

export const getCircultByRace = (arrCircultId) => {
  return Circuit.find({ _id: { $in: arrCircultId } });
};
