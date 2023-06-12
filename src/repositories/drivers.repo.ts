import Driver, { IDriver } from "../models/drivers.model";

export const getDriver = (arrDriverId) => {
  return Driver.find({ _id: { $in: arrDriverId } });
};

export const getOneByDriverRef = (driverRef) => {
  return Driver.findOne({ driverRef });
};
