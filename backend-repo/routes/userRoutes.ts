import express, { Request, Response, NextFunction } from 'express';
import { updateUserData, fetchUserData } from '../controller/api';
import authMiddleware from '../middleware/authMiddleware';

const router = express.Router();

router.post('/users', authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  return updateUserData(req, res);
});
router.get('/users/:uid', authMiddleware, async (req: Request, res: Response, next: NextFunction) => {
  return fetchUserData(req, res);
});

export default router;