import { Request, Response, NextFunction } from 'express';

const express = require('express');
const router = express.Router();

router.get('/profile', (req: any, res: Response, next: NextFunction) => {
  res.json({
    message: 'You made it to the secure route',
    user: req.user._id,
    token: req.query.secret_token
  });
});

module.exports = router;
