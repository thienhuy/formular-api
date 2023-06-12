import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ISprintResult extends Document {
  _id: number;
  resultId: number;
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
  fastestLapTime: string;
  statusId: number;
}

export type SprintResultObject = {
  _id?: number | undefined;
  resultId?: number | undefined;
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
  fastestLapTime?: string | undefined;
  statusId?: number | undefined;
};

export type SprintResultFilterObject = {
  _id?: number | undefined;
  resultId?: number | undefined;
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
  fastestLapTime?: string | undefined;
  statusId?: number | undefined;
};

const SprintResultSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  resultId: { type: Schema.Types.Number, ref: "result" },
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
  fastestLapTime: { type: Schema.Types.String },
  statusId: { type: Schema.Types.Number },
});

export default mongoose.model<ISprintResult>(
  "sprint_result",
  SprintResultSchema,
  "sprint_results"
);
