// backend/routes/webComponentsRoutes.js
import { Router } from 'express';
import { generateWebComponents } from '../controllers/webComponentsController.js';

const router = Router();

router.post('/generate', generateWebComponents);

export default router;
