const db = require("../models");
const User = db.User; 

exports.login = async (name) => {
  console.log("-------------------")
  console.log("Login")
  console.log("Name del usuario", name)
  return await User.findOne({ where: { name: name } });
};