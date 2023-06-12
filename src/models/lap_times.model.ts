import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ILapTime extends Document {
  _id: number;
  raceId: number;
  driverId: number;
  lap: number;
  position: number;
  time: string;
  milliseconds: number;
}

export type LapTimeObject = {
  _id: number;
  raceId?: number | undefined;
  driverId?: number | undefined;
  lap?: number | undefined;
  position?: number | undefined;
  time?: string | undefined;
  milliseconds?: number | undefined;
};

export type LapTimeFilterObject = {
  _id: number;
  raceId?: number | undefined;
  driverId?: number | undefined;
  lap?: number | undefined;
  position?: number | undefined;
  time?: string | undefined;
  milliseconds?: number | undefined;
};

const LapTimeSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  raceId: { type: Schema.Types.Number, ref: "race" },
  driverId: { type: Schema.Types.Number, ref: "driver" },
  lap: { type: Schema.Types.Number },
  position: { type: Schema.Types.Number },
  time: { type: Schema.Types.String },
  milliseconds: { type: Schema.Types.Number },
});

export default mongoose.model<ILapTime>("lap_time", LapTimeSchema, "lap_times");
