const jwt = require("jsonwebtoken");

exports.GenerateOTP = () => Math.floor(100000 + Math.random() * 900000);

exports.GenerateToken = (user) => {
  const token = jwt.sign(
    {
      firstName: user.fName,
      lastName: user.lName,
      email: user.email,
    },
    process.env.SECRET,
    {
      expiresIn: "30days",
    }
  );
  return token;
};
