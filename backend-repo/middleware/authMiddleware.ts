import type { Request, Response, NextFunction } from 'express';
import { admin } from '../config/firebaseConfig';

const authMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const token = req.headers.authorization?.split('Bearer ')[1];

  if (!token) {
    res.status(401).json({ message: 'No token provided.' });
    return;
  }

  try {
    const decodedToken = await admin.auth().verifyIdToken(token);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(403).json({ message: 'Invalid token.' });
    return;
  }
};

export default authMiddleware;