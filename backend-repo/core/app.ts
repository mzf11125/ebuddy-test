import express from 'express';
import userRoutes from '../routes/userRoutes';

const app = express();

// Middleware
app.use(express.json()); // for parsing application/json

// Routes
app.use('/api', userRoutes);

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});