import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IStatus extends Document {
  _id: number;
  status: string;
}

export type StatusObject = {
  _id?: number | undefined;
  status?: string | undefined;
};

export type StatusFilterObject = {
  _id?: number | undefined;
  status?: string | undefined;
};

const StatusSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  status: { type: Schema.Types.String },
});

export default mongoose.model<IStatus>("status", StatusSchema, "status");
