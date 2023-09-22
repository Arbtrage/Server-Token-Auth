import mongoose, { Schema, Model } from "mongoose";
import { SessionDocument } from "../types";

const sessionSchema = new Schema<SessionDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    token: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);

const SessionModel: Model<SessionDocument> = mongoose.model<SessionDocument>(
  "Sessions",
  sessionSchema
);

export default SessionModel;
