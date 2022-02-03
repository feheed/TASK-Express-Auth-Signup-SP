const User = require("../../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { JWT_EXP, JWT_SECRETKEY } = require("../../config/keys");

exports.userCreate = async (req, res, next) => {
  try {
    const saltRounds = 10;
    const hashingPassword = await bcrypt.hash(userPassword, saltRounds);
    req.body.password = hashingPassword;
    const newUser = await User.create(req.body);
    const payload = {
      username: newUser.username,
      exp: Date.now() - JWT_EXP,
    };
    const token = jwt.sign(payload, JWT_SECRETKEY);
    return res.status(201).json({ token: token });
  } catch (error) {
    next(error);
  }
};
