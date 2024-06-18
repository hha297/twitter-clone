import express from 'express';
import { getCurrentUser, signIn, signOut, signUp } from '../controller/auth.controller.js';
import { protectRoute } from '../middleware/protectRoute.js';

const router = express.Router();

router.get('/me', protectRoute, getCurrentUser);

router.post('/sign-up', signUp);

router.post('/sign-in', signIn);

router.post('/sign-out', signOut);
export default router;
