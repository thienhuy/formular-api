import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IPitStop extends Document {
  _id: number;
  raceId: number;
  driverId: number;
  stop: number;
  lap: number;
  time: string;
  duration: number;
  milliseconds: number;
}

export type PitStopObject = {
  _id: number;
  raceId?: number | undefined;
  driverId?: number | undefined;
  stop: number | undefined;
  lap?: number | undefined;
  time?: string | undefined;
  duration?: number | undefined;
  milliseconds?: number | undefined;
};

export type PitStopFilterObject = {
  _id: number;
  raceId?: number | undefined;
  driverId?: number | undefined;
  stop: number | undefined;
  lap?: number | undefined;
  time?: string | undefined;
  duration?: number | undefined;
  milliseconds?: number | undefined;
};

const PitStopSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  raceId: { type: Schema.Types.Number, ref: "race" },
  driverId: { type: Schema.Types.Number, ref: "driver" },
  stop: { type: Schema.Types.Number },
  lap: { type: Schema.Types.Number },
  time: { type: Schema.Types.String },
  duration: { type: Schema.Types.Number },
  milliseconds: { type: Schema.Types.Number },
});

export default mongoose.model<IPitStop>("pit_stop", PitStopSchema, "pit_stops");
