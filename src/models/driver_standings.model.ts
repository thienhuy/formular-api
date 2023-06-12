import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IDriverStanding extends Document {
  _id: number;
  raceId: number;
  driverId: number;
  points: number;
  position: number;
  positionText: string;
  wins: number;
}

export type DriverStandingObject = {
  _id?: number | undefined;
  raceId?: number | undefined;
  driverId?: number | undefined;
  points?: number | undefined;
  position?: number | undefined;
  positionText?: string | undefined;
  wins?: number | undefined;
};

export type DriverStandingFilterObject = {
  _id?: number | undefined;
  raceId?: number | undefined;
  driverId?: number | undefined;
  points?: number | undefined;
  position?: number | undefined;
  positionText?: string | undefined;
  wins?: number | undefined;
};

const DriverStandingSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  raceId: { type: Schema.Types.Number, ref: "race" },
  driverId: { type: Schema.Types.Number, ref: "driver" },
  points: { type: Schema.Types.Number },
  position: { type: Schema.Types.Number },
  positionText: { type: Schema.Types.String },
  wins: { type: Schema.Types.Number },
});

export default mongoose.model<IDriverStanding>(
  "diver_standing",
  DriverStandingSchema,
  "driver_standings"
);
