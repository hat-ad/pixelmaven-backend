const jwt = require("jsonwebtoken");

exports.GenerateOTP = () => Math.floor(100000 + Math.random() * 900000);

exports.GenerateToken = (user) => {
  const token = jwt.sign(
    {
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
    },
    "this is a secret",
    {
      expiresIn: "30days",
    }
  );
  return token;
};
