import { Request, Response, NextFunction } from 'express';
import Session from '../models/Session.model';
import User from '../models/User.model';

interface UserData {
  id: string;
  email: string;
  name?: string;
}

interface AuthenticatedRequest extends Request {
  user?: UserData; 
}

export const authenticate = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const sessionToken = req.header('x-session-token');

  if (!sessionToken) {
    return res.status(401).json({ msg: 'No session token, authorization denied' });
  }

  try {
      const session = await Session.findOne({ token: sessionToken });

    if (!session) {
      return res.status(401).json({ msg: 'Session not found, authorization denied' });
    }
    const user = await User.findById(session.userId);

    if (!user) {
      return res.status(401).json({ msg: 'User not found, authorization denied' });
    }
    req.user = {
      id: user._id.toString(),
      email: user.email,
      name: user.name,
    };

    next();
  } catch (error) {
    res.status(500).json({ msg: 'Server error' });
  }
};
