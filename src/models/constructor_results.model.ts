import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IContructorResults extends Document {
  _id: number;
  raceId: number;
  constructorId: number;
  points: number;
  status: string;
}

export type ContructorResultsObject = {
  _id: number | undefined;
  raceId?: number | undefined;
  constructorId?: number | undefined;
  points?: number | undefined;
  status?: string | undefined;
};

export type ContructorResultsFilterObject = {
  _id: number | undefined;
  raceId?: number | undefined;
  constructorId?: number | undefined;
  points?: number | undefined;
  status?: string | undefined;
};

const ContructorResultsSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  raceId: { type: Schema.Types.String, ref: "race" },
  constructorId: { type: Schema.Types.Number, ref: "constructor" },
  points: { type: Schema.Types.String },
  status: { type: Schema.Types.String },
});

export default mongoose.model<IContructorResults>(
  "contructor_result",
  ContructorResultsSchema,
  "contructor_results"
);
