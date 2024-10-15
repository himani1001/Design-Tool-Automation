import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

import figmaRoutes from './routers/figmaRoutes.js';
import webComponentsRoutes from './routers/webComponentsRoutes.js';
import contentTypeRoutes from './routers/contentTypeRoutes.js';

// Load environment variables from .env file
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// API Routes
app.use('/api/figma', figmaRoutes);
app.use('/api/web-components', webComponentsRoutes);
app.use('/api/content-types', contentTypeRoutes);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
