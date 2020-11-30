const { Router } = require('express');
const User = require('../models/User');
const router = Router();

router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const candidate = await User.findOne({ email });

    if (candidate) {
      return res
        .status(400)
        .json({ message: 'User with this email already exist' });
    }
  } catch (e) {
    res.status(500).json('something wrong');
  }
});
module.exports = router;
