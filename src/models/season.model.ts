import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ISeason extends Document {
  _id: number;
  year: number;
  url: string;
}

export type SeasonObject = {
  _id: number;
  year?: number | undefined;
  url?: string | undefined;
};

export type SeasonFilterObject = {
  _id: number;
  year?: number | undefined;
  url?: string | undefined;
};

const SeasonSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  year: { type: Schema.Types.Number, default: 0 },
  url: { type: Schema.Types.String },
});

export default mongoose.model<ISeason>("season", SeasonSchema, "seasons");
