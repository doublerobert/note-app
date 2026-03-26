import { model, Schema } from "mongoose";
import type { InferSchemaType } from "mongoose";

const noteSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    text: { type: String },
  },
  { timestamps:     true },
);

type Note = InferSchemaType<typeof noteSchema>;

export default model<Note>("Note", noteSchema);
