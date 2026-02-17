import {RequestHandler } from 'express';
import { signupSchema, loginSchema } from '../validators/auth.validation.js';

export const signupValidation: RequestHandler = (req, res, next) => {
  const result = signupSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      message: result.error.issues[0].message,
    });
  }

  req.body = result.data;
  next();
};

export const loginValidation: RequestHandler = (req, res, next) => {
  const result = loginSchema.safeParse(req.body);

  if (!result.success) {
    res.status(400).json({
      message: result.error.issues[0].message,
    });
  }

  req.body = result.data;
  next();
};
