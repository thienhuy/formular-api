import Season, { ISeason } from "../models/season.model";

export const getAll = () => {
  return Season.find();
};
