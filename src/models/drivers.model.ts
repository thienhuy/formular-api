import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IDriver extends Document {
  _id: number;
  driverRef: string;
  number: number;
  code: string;
  forename: string;
  surname: string;
  dob: Date;
  nationality: string;
  url: string;
}

export type DriverObject = {
  _id?: number | undefined;
  driverRef?: string | undefined;
  number?: number | undefined;
  code?: string | undefined;
  forename?: string | undefined;
  surname?: string | undefined;
  dob?: Date | undefined;
  nationality?: string | undefined;
  url?: string | undefined;
};

export type DriverFilterObject = {
  _id?: number | undefined;
  driverRef?: string | undefined;
  number?: number | undefined;
  code?: string | undefined;
  forename?: string | undefined;
  surname?: string | undefined;
  dob?: Date | undefined;
  nationality?: string | undefined;
  url?: string | undefined;
};

const DriverSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  driverRef: { type: Schema.Types.String },
  number: { type: Schema.Types.Number },
  code: { type: Schema.Types.String },
  forename: { type: Schema.Types.String },
  surname: { type: Schema.Types.String },
  dob: { type: Schema.Types.Date },
  nationality: { type: Schema.Types.String },
  url: { type: Schema.Types.String },
});

export default mongoose.model<IDriver>("driver", DriverSchema, "drivers");
