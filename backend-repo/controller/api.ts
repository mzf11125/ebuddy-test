import { Request, Response } from 'express';
import { db } from '../config/firebaseConfig';
import User from '../entities/user';

const USERS_COLLECTION = 'USERS';

export const updateUserData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const userData: User = req.body;
    await db.collection(USERS_COLLECTION).doc(userData.uid).set(userData);
    return res.status(200).send({ message: 'User data updated successfully' });
  } catch (error) {
    console.error('Error updating user data:', error);
    return res.status(500).send({ message: 'Failed to update user data' });
  }
};

export const fetchUserData = async (req: Request, res: Response): Promise<Response> => {
  try {
    const uid = req.params.uid;
    const userSnapshot = await db.collection(USERS_COLLECTION).doc(uid).get();

    if (!userSnapshot.exists) {
      return res.status(404).send({ message: 'User not found' });
    }

    const userData = userSnapshot.data() as User;
    return res.status(200).send(userData);
  } catch (error) {
    console.error('Error fetching user data:', error);
    return res.status(500).send({ message: 'Failed to fetch user data' });
  }
};