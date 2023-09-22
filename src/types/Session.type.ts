import { Document, Types } from "mongoose";

export interface Session {
  token: string;
  refreshToken: string;
  userId: Types.ObjectId;
}

export interface SessionDocument extends Session, Document {}
