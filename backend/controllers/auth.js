const jwt = require("jsonwebtoken");
const utils = require("../utils");
const bcrypt = require("bcryptjs");
const db = require("../models");
const { login } = require("./site.controller");

exports.signin = async (req, res) => {
  const { name, password } = req.body;


  if (!name || !password) {
    return res.status(400).json({
      error: "Username and password required",
      password: password,
      name: name,
    });
  }

  try {
    console.log("Entró");
    let foundUser = await login(name)
    console.log("sigue");

    if (!foundUser) return res.status(404).json({ error: "User not found" });

    // Validar la contraseña
    const isMatch = await bcrypt.compare(password, foundUser.password);
    if (!isMatch) return res.status(401).json({ error: "Incorrect password" });

    // Generar el token
    const token = jwt.sign(
      { id: foundUser.id },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    const userObj = utils.getCleanUser(foundUser);
    res.json({ user: userObj, token });
  } catch (err) {
    console.error(err); // Agregar log para depurar
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
