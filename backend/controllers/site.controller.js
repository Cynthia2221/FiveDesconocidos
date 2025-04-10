const db = require("../models");
const User = db.User;

exports.login = async (name) => {
  return await User.findOne({ where: { name: name } });
};