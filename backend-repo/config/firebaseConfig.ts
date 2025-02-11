import admin from 'firebase-admin';

// Initialize Firebase Admin SDK
const serviceAccount = require('./serviceAccountKey.json'); // Path to your service account key

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  // databaseURL: 'YOUR_DATABASE_URL', // Optional: If you need to use Firebase Realtime Database
});

const db = admin.firestore(); // Firestore database

export { admin, db };