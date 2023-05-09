const services = require("../services");
const Bcryptjs = require("bcryptjs");
const moment = require("moment");
const { OK, ERROR } = require("../../utils/responseHelper");
const { GenerateOTP, GenerateToken } = require(".../../utils/function");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await services.User.getUserByEmail(email);

    if (!user || !user.isVerified) {
      return ERROR(
        res,
        user,
        !user.isVerified
          ? "This user has not been verified yet.Please check your mail to verify!"
          : "This User is not Registered or Disabled"
      );
    }

    const hashedPassword = await Bcryptjs.compare(password, user.password);
    if (!hashedPassword) return ERROR(res, user, "Invalid Password!");
    const token = GenerateToken(user);
    user.token = token;
    await user.save();

    return OK(res, { user, token }, "USER Logged in Successfully!");
  } catch (error) {
    return ERROR(res, { error }, error.message || "Something went Wrong");
  }
};

exports.register = async (req, res) => {
  try {
    const { email, password, firstName, lastName } = req.body;
    const user = await services.User.getUserByEmail(email);

    if (user) {
      return ERROR(res, user, "Please login to continue");
    }
    const hashPassword = await Bcryptjs.hash(password, 12);
    const token = GenerateToken(user);
    const body = {
      firstName,
      lastName,
      email,
      password: hashPassword,
      token,
    };
    const newUser = await services.User.createUser(body);

    return OK(res, { user: newUser, token }, "User registered SuccessFully!");
  } catch (error) {
    return ERROR(res, { error }, error.message || "Something went Wrong");
  }
};
