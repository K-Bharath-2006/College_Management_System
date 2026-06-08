import express from 'express';
import { body } from 'express-validator';
import { login, forgotPassword } from '../controllers/authController.js';

const router = express.Router();

// POST /api/auth/login
router.post(
  '/login',
  [
    body('email').isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login
);

// POST /api/auth/forgot-password
router.post(
  '/forgot-password',
  [
    body('email').isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
  ],
  forgotPassword
);

export default router;
