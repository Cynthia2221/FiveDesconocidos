const jwt = require("jsonwebtoken");
const utils = require("../utils");
const bcrypt = require("bcryptjs");
const db = require("../models");
const { login } = require("./site.controller");

exports.signin = async (req, res) => {
  const { user, password } = req.body;

  if (!user || !password) {
    return res.status(400).json({
      error: "Username and password required",
    });
  }

  try {
    let user = await login(user);
    
    if (!user) return res.status(404).json({ error: "User not found" });

    // Validar la contraseña
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Incorrect password" });

    // Generar el token
    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: "1h" });

    const userObj = utils.getCleanUser(user);
    res.json({ user: userObj, token });
  } catch (err) {
    res.status(500).json({ error: "Internal error" });
  }
};

exports.isAuthenticated = (req, res, next) => {
  const token = req.token;
  if (!token) {
    return res.status(400).json({ error: true, message: "Token is required." });
  }

  jwt.verify(token, process.env.JWT_SECRET, async (err, decoded) => {
    if (err) return res.status(401).json({ error: true, message: "Invalid token." });

    try {
      const user = await db.user.findByPk(decoded.id);
      if (!user) {
        return res.status(401).json({ error: true, message: "Invalid user." });
      }
      req.user = user;
      next();
    } catch (error) {
      res.status(500).json({ message: `Error retrieving User with id=${decoded.id}`, error });
    }
  });
};
