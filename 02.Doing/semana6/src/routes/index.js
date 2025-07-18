import express from 'express';
import taskRoutes from '../routes/taskRoutes.js';
import userRoutes from '../routes/userRoutes.js';

const router = express.Router();

router.use('',taskRoutes);
router.use(userRoutes);

export default router;