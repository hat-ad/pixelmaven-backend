const services = require("../services");
const Bcryptjs = require("bcryptjs");
const { OK, ERROR } = require("../../utils/responseHelper");
const { GenerateToken } = require("../../utils/functions");

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await services.User.getUserByEmail(email);

    if (!user) {
      return ERROR(res, user, "This User is not Registered or Disabled");
    }

    const hashedPassword = await Bcryptjs.compare(password, user.password);
    if (!hashedPassword) return ERROR(res, user, "Invalid Password!");
    const token = GenerateToken(user);
    user.token = token;
    await user.save();

    return OK(res, user, "USER Logged in Successfully!");
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
    const token = GenerateToken(req.body);
    const body = {
      firstName,
      lastName,
      email,
      password: hashPassword,
      token,
      isVerified: true,
    };
    const newUser = await services.User.createUser(body);

    return OK(res, newUser, "User registered SuccessFully!");
  } catch (error) {
    console.log(error);
    return ERROR(res, { error }, error.message || "Something went Wrong");
  }
};
