import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IResult extends Document {
  _id: number;
  raceId: number;
  driverId: number;
  constructorId: number;
  number: number;
  grid: number;
  position: number;
  positionText: string;
  positionOrder: number;
  points: number;
  laps: number;
  time: string;
  milliseconds: number;
  fastestLap: number;
  rank: number;
  fastestLapTime: string;
  fastestLapSpeed: string;
  statusId: number;
}

export type ResultObject = {
  _id?: number | undefined;
  raceId?: number | undefined;
  driverId?: number | undefined;
  constructorId?: number | undefined;
  number?: number | undefined;
  grid?: number | undefined;
  position?: number | undefined;
  positionText?: string | undefined;
  positionOrder?: number | undefined;
  points?: number | undefined;
  laps?: number | undefined;
  time?: string | undefined;
  milliseconds?: number | undefined;
  fastestLap?: number | undefined;
  rank?: number | undefined;
  fastestLapTime?: string | undefined;
  fastestLapSpeed?: string | undefined;
  statusId?: number | undefined;
};

export type ResultFilterObject = {
  _id?: number | undefined;
  raceId?: number | undefined;
  driverId?: number | undefined;
  constructorId?: number | undefined;
  number?: number | undefined;
  grid?: number | undefined;
  position?: number | undefined;
  positionText?: string | undefined;
  positionOrder?: number | undefined;
  points?: number | undefined;
  laps?: number | undefined;
  time?: string | undefined;
  milliseconds?: number | undefined;
  fastestLap?: number | undefined;
  rank?: number | undefined;
  fastestLapTime?: string | undefined;
  fastestLapSpeed?: string | undefined;
  statusId?: number | undefined;
};

const ResultSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  raceId: { type: Schema.Types.Number, ref: "race" },
  driverId: { type: Schema.Types.Number, ref: "driver" },
  constructorId: { type: Schema.Types.Number, ref: "constructor" },
  number: { type: Schema.Types.Number },
  grid: { type: Schema.Types.Number },
  position: { type: Schema.Types.Number },
  positionText: { type: Schema.Types.String },
  positionOrder: { type: Schema.Types.Number },
  points: { type: Schema.Types.Number },
  laps: { type: Schema.Types.Number },
  time: { type: Schema.Types.String },
  milliseconds: { type: Schema.Types.Number },
  fastestLap: { type: Schema.Types.Number },
  rank: { type: Schema.Types.Number },
  fastestLapTime: { type: Schema.Types.String },
  fastestLapSpeed: { type: Schema.Types.String },
  statusId: { type: Schema.Types.Number },
});

export default mongoose.model<IResult>("result", ResultSchema, "results");
