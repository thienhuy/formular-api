import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IRace extends Document {
  _id: number;
  year: number;
  round: number;
  circuitId: number;
  name: string;
  date: Date;
  time: string;
  url: string;
  fp1_date: string;
  fp1_time: string;
  fp2_date: string;
  fp2_time: string;
  fp3_date: string;
  fp3_time: string;
  quali_date: string;
  quali_time: string;
  sprint_date: string;
  sprint_time: string;
}

export type RaceObject = {
  _id?: number | undefined;
  year?: number | undefined;
  round?: number | undefined;
  circuitId?: number | undefined;
  name?: string | undefined;
  date?: Date | undefined;
  time?: string | undefined;
  url?: string | undefined;
  fp1_date?: string | undefined;
  fp1_time?: string | undefined;
  fp2_date?: string | undefined;
  fp2_time?: string | undefined;
  fp3_date?: string | undefined;
  fp3_time?: string | undefined;
  quali_date?: string | undefined;
  quali_time?: string | undefined;
  sprint_date?: string | undefined;
  sprint_time?: string | undefined;
};

export type RaceFilterObject = {
  _id?: number | undefined;
  year?: number | undefined;
  round?: number | undefined;
  circuitId?: number | undefined;
  name?: string | undefined;
  date?: Date | undefined;
  time?: string | undefined;
  url?: string | undefined;
  fp1_date?: string | undefined;
  fp1_time?: string | undefined;
  fp2_date?: string | undefined;
  fp2_time?: string | undefined;
  fp3_date?: string | undefined;
  fp3_time?: string | undefined;
  quali_date?: string | undefined;
  quali_time?: string | undefined;
  sprint_date?: string | undefined;
  sprint_time?: string | undefined;
};

const RaceSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  year: { type: Schema.Types.Number },
  round: { type: Schema.Types.Number },
  circuitId: { type: Schema.Types.Number },
  name: { type: Schema.Types.String },
  date: { type: Schema.Types.Date },
  time: { type: Schema.Types.String },
  url: { type: Schema.Types.String },
  fp1_date: { type: Schema.Types.String },
  fp1_time: { type: Schema.Types.String },
  fp2_date: { type: Schema.Types.String },
  fp2_time: { type: Schema.Types.String },
  fp3_date: { type: Schema.Types.String },
  fp3_time: { type: Schema.Types.String },
  quali_date: { type: Schema.Types.String },
  quali_time: { type: Schema.Types.String },
  sprint_date: { type: Schema.Types.String },
  sprint_time: { type: Schema.Types.String },
});

export default mongoose.model<IRace>("race", RaceSchema, "races");
