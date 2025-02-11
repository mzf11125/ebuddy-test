import { Request } from 'express';
import * as admin from 'firebase-admin';

declare module 'express-serve-static-core' {
  interface Request {
    user?: admin.auth.DecodedIdToken;
  }
}