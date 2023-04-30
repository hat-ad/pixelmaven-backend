const services = require("../services");

exports.getUser = async (req, res) => {
  try {
    const user = await services.User.getUserByEmail("ashis@yopmail.com");
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};
