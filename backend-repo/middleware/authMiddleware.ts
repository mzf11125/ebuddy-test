import { Request, Response, NextFunction } from 'express';
import { user } from '../entities/user';
import * as admin from 'firebase-admin';

// Initialize Firebase Admin SDK
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({ error: 'Unauthorized: Token missing' });
  }

  // Verify the token with Firebase Auth
  admin.auth().verifyIdToken(token)
    .then((decodedToken) => {
      req.user = decodedToken;
      next();
    })
    .catch((error) => {
      return res.status(401).json({ error: 'Unauthorized: Invalid token' });
    });
}