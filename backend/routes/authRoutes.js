import express from 'express';
import { body } from 'express-validator';
import { login, forgotPassword, resetPassword } from '../controllers/authController.js';

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

// POST /api/auth/reset-password
router.post(
  '/reset-password',
  [
    body('email').isEmail().withMessage('Please enter a valid email address').normalizeEmail(),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),
  ],
  resetPassword
);

export default router;
