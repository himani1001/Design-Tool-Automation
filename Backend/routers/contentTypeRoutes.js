// backend/routes/contentTypeRoutes.js
import { Router } from 'express';
import { generateContentType } from '../controllers/contentTypeController.js';

const router = Router();

router.post('/generate', generateContentType);

export default router;
