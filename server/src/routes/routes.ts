import { Response, NextFunction } from 'express';
const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const router = express.Router();

router.post(
  '/signup',
  passport.authenticate('signup', { session: false }),
  async (req: any, res: Response, next: NextFunction) => {
    const { email, password } = req.user;

    res.json({
      message: 'User was created! Signup successful!',
      user: req.user,
      email,
      password
    });
  }
);

router.post('/login', async (req: any, res: Response, next: NextFunction) => {
  passport.authenticate('login', async (err: any, user: any, info: any) => {
    try {
      if (err || !user) {
        const error = new Error('An error occurred.');
        return next(error);
      }

      req.login(user, { session: false }, async (error: any) => {
        if (error) return next(error);

        const body = { _id: user._id, email: user.email };
        const token = jwt.sign({ user: body }, 'TOP_SECRET', {
          expiresIn: '1h'
        });
        return res.json({ token, userId: body._id });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

module.exports = router;
