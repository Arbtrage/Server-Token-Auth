import UserToken from "../models/Session.model";
import jwt, { Secret } from "jsonwebtoken";
import { Model } from "mongoose";
import { SessionDocument } from "../types";


const UserTokenModel: Model<SessionDocument> = UserToken;

export const verify = {
  verifyRefreshToken: async (refreshToken: string) => {
    try {
      const privateKey: Secret = process.env.REFRESH_TOKEN_PRIVATE_KEY || "";
      const user = await UserTokenModel.findOne({ token: refreshToken });

      if (!user) throw new Error("Invalid Refresh token");

      const ver = jwt.verify(refreshToken, privateKey);
      if (!ver) throw new Error("nvalid refresh token");

      return Promise.resolve({
        ver,
        error: false,
        message: "Valid refresh token",
      });
    } catch (error) {
      return Promise.reject({ error: true, message: error.message });
    }
  },
};
