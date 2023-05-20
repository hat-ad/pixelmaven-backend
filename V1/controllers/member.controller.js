const services = require("../services");
const { OK, ERROR } = require("../../utils/responseHelper");

exports.createMember = async (req, res) => {
  try {
    const { name, dob, gender, image } = req.body;
    const member = await services.Member.createMember({
      name,
      dob,
      gender,
      image,
    });

    return OK(res, member, "Member added successfully!");
  } catch (error) {
    return ERROR(res, { error }, error.message || "Something went Wrong");
  }
};
