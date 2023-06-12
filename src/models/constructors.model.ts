import mongoose, { Document, ObjectId, Schema } from "mongoose";

export interface IConstructor extends Document {
  _id: number;
  name: string;
  constructorRef: string;
  nationality: string;
  url: string;
}

export type ConstructorObject = {
  _id: number;
  name?: string | undefined;
  constructorRef?: string | undefined;
  nationality?: string | undefined;
  url?: string | undefined;
};

export type ContructorFilterObject = {
  _id: number;
  name?: string | undefined;
  constructorRef?: string | undefined;
  nationality?: string | undefined;
  url?: string | undefined;
};

const ConstructorSchema: Schema = new Schema({
  _id: { type: Schema.Types.Number },
  name: { type: Schema.Types.String },
  constructorRef: { type: Schema.Types.Number },
  nationality: { type: Schema.Types.String },
  url: { type: Schema.Types.String },
});

export default mongoose.model<IConstructor>(
  "constructor",
  ConstructorSchema,
  "constructors"
);
