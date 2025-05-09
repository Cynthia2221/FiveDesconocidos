const jwt = require("jsonwebtoken");

//! Separar basic y bearer

module.exports = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) {
    return next(); 
  }


  if (authHeader.startsWith("Basic ")) {
    const base64Credentials = authHeader.split(" ")[1];
    const credentials = Buffer.from(base64Credentials, "base64").toString("ascii");
    const [name, password] = credentials.split(":");


    if (!req.body.name) req.body.name = name;
    if (!req.body.password) req.body.password = password;

    return next();
  }
 
  if (authHeader.startsWith("Bearer ")) {
    const token = authHeader.replace("Bearer ", "");

    if (!token) {
      return res.status(401).json({
        error: true,
        message: "Token no proporcionado.",
      });
    }

    jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
      if (err) {
        return res.status(401).json({
          error: true,
          message: "Token inválido o expirado.",
        });
      }

      req.user = user;
      req.token = token;
      next();
    });
  } else {
    return res.status(401).json({
      error: true,
      message: "Formato de autorización no válido.",
    });
  }
};