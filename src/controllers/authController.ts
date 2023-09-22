import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Request, Response } from 'express';
import Session from '../models/Session.model';
import User from '../models/User.model';
import {Tokens,verify} from '../utils/index'

export const register = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    let user = await User.findOne({ email });

    if (user) {
      return res.status(400).json({ msg: 'User already exists' });
    }
    user = new User({ email, password, name });
    await user.save();

    res.status(201).json({ msg: 'User registered successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};

export const login = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({ msg: 'Invalid credentials' });
    }
    const { accessToken, refreshToken }=await Tokens.generateToken(user)

      res.status(200).json({error:false,accessToken,refreshToken,message:"Logged In successfully"});
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message});
  }
};

export const refreshToken = async (req: Request, res: Response) => {
    try {
        const tokenDetails = await verify.verifyRefreshToken(req.body.refreshToken);
        if (tokenDetails.error) throw new Error(tokenDetails.message);
      const payload = { _id: tokenDetails.ver._id };
        const accessToken = jwt.sign(
            payload,
            process.env.ACCESS_TOKEN_PRIVATE_KEY,
            { expiresIn: "14m" }
        );
        res.status(200).json({
            error: false,
            accessToken,
            message: "Access token created successfully",
        });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

export const logOut = async (req: Request, res: Response) => {
  try {
    const sessionToken = req.body.sessionToken;
    await Session.findOneAndRemove({ token: sessionToken });

    res.json({ msg: 'Logged out successfully' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ msg: 'Server error' });
  }
};
