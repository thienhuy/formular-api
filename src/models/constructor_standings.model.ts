import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IConstructorStanding extends Document {
  _id: number;
  raceId: number;
  constructorId: number;
  points: number;
  position: number;
  positionText: string;
  wins: number;
}

export type ConstructorStandingObject = {
  _id?: number | undefined;
  raceId?: number | undefined;
  constructorId?: number | undefined;
  points?: number | undefined;
  position?: number | undefined;
  positionText?: string | undefined;
  wins?: number | undefined;
};

export type ConstructorStandingFilterObject = {
  _id?: number | undefined;
  raceId?: number | undefined;
  constructorId?: number | undefined;
  points?: number | undefined;
  position?: number | undefined;
  positionText?: string | undefined;
  wins?: number | undefined;
};

const ConstructorStandingSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  raceId: { type: Schema.Types.Number, ref: "race" },
  constructorId: { type: Schema.Types.Number, ref: "constructor" },
  points: { type: Schema.Types.Number },
  position: { type: Schema.Types.Number },
  positionText: { type: Schema.Types.String },
  wins: { type: Schema.Types.Number },
});

export default mongoose.model<IConstructorStanding>(
  "constructor_standing",
  ConstructorStandingSchema,
  "constructor_standings"
);
