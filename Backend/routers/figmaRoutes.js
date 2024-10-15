// backend/routes/figmaRoutes.js
import { Router } from 'express';
import generateFigmaDesign from '../controllers/figmaController.js';

const router = Router();

router.post('/generate', generateFigmaDesign);

export default router;
