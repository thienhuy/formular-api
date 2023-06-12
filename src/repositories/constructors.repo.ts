import Constructor, { IConstructor } from "../models/constructors.model";

export const getConstructor = (arrConstructorId) => {
  return Constructor.find({ _id: { $in: arrConstructorId } });
};

export const getOneByConstructorRef = (constructorRef) => {
  return Constructor.findOne({ constructorRef });
};
