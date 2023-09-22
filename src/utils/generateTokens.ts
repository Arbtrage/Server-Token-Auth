import jwt from "jsonwebtoken";
import UserToken from '../models/Session.model'

export const Tokens = {
    generateToken: async (user) => {
        try {
            const payload = { _id: user._id};
            const accessToken = jwt.sign(
                payload,
                process.env.ACCESS_TOKEN_PRIVATE_KEY,
                { expiresIn: "14m" }
            );
            const refreshToken = jwt.sign(
                payload,
                process.env.REFRESH_TOKEN_PRIVATE_KEY,
                { expiresIn: "30d" }
            );
    
    
            await new UserToken({ userId: user._id, token: refreshToken }).save();
            return Promise.resolve({ accessToken, refreshToken });
        } catch (err) {
            return Promise.reject(err);
        }
    } ,   
}