import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface ICircuit extends Document {
  _id: number;
  name: string;
  circuitRef: string;
  location: string;
  country: string;
  lat: number;
  lng: number;
  alt: number;
  url: string;
}

export type CircuitObject = {
  _id: number;
  name?: string | undefined;
  circuitRef?: string | undefined;
  location?: string | undefined;
  country?: string | undefined;
  lat?: number | undefined;
  lng?: number | undefined;
  alt?: number | undefined;
  url?: string | undefined;
};

export type CircuitFilterObject = {
  _id: number;
  name?: string | undefined;
  circuitRef?: string | undefined;
  location?: string | undefined;
  country?: string | undefined;
  lat?: number | undefined;
  lng?: number | undefined;
  alt?: number | undefined;
  url?: string | undefined;
};

const CircuitSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  name: { type: Schema.Types.String },
  circuitRef: { type: Schema.Types.String },
  location: { type: Schema.Types.String },
  country: { type: Schema.Types.String },
  lat: { type: Schema.Types.Number },
  lng: { type: Schema.Types.Number },
  alt: { type: Schema.Types.Number },
  url: { type: Schema.Types.String },
});

export default mongoose.model<ICircuit>("circuit", CircuitSchema, "circuits");
