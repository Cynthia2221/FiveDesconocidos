const db = require("../models");
const User = db.user; 

exports.login = async (user) => {
  return await User.findOne({ where: { user } });
};