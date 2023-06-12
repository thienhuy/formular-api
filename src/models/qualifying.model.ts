import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IQualifying extends Document {
  _id: number;
  raceId: number;
  driverId: number;
  constructorId: number;
  number: number;
  position: number;
  q1: string;
  q2: string;
  q3: string;
}

export type QualifyingObject = {
  _id?: number | undefined;
  raceId?: number | undefined;
  driverId?: number | undefined;
  constructorId?: number | undefined;
  number?: number | undefined;
  position?: number | undefined;
  q1?: string | undefined;
  q2?: string | undefined;
  q3?: string | undefined;
};

export type QualifyingFilterObject = {
  _id?: number | undefined;
  raceId?: number | undefined;
  driverId?: number | undefined;
  constructorId?: number | undefined;
  number?: number | undefined;
  position?: number | undefined;
  q1?: string | undefined;
  q2?: string | undefined;
  q3?: string | undefined;
};

const QualifyingSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  raceId: { type: Schema.Types.Number, ref: "race" },
  driverId: { type: Schema.Types.Number, ref: "driver" },
  constructorId: { type: Schema.Types.Number, ref: "constructor" },
  number: { type: Schema.Types.Number },
  position: { type: Schema.Types.Number },
  q1: { type: Schema.Types.String },
  q2: { type: Schema.Types.String },
  q3: { type: Schema.Types.String },
});

export default mongoose.model<IQualifying>(
  "qualifying",
  QualifyingSchema,
  "qualifyings"
);
