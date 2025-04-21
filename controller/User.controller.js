import UserServices from "../service/user.services.js";
import crypto from "crypto";
import { PassValidation, emailValidation } from "../utils/validation.js";
const userServices = new UserServices();

const registerUser = async (req, res) => {
  try {
   
    const pass = String(req.body.password);
    if (!PassValidation(pass) || pass.length <= 5) {
      return res.status(500).json({
        message:
          "Password must be greater than 5 characters and contain at least one uppercase letter",
        success: false,
        err: "Not fullfill the credentials",
      });
    }
  
    const email = String(req.body.email);
    if (!emailValidation(email)) {
      return res.status(500).json({
        mesasge: "Email must be valid email format",
        success: false,
        err: "Not fullfill the credentials",
      });
    }

    // const emailExist = await userServices.userRepository.findOne(email);
    if (userServices.getUser(email)) {
      return res.status(400).json({
        message: "User with this email already exist",
        success: false,
        err: "User already exist",
      });
    }

    // All fields validation
    // All fields are required
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }

    //User Creation
    const user = await userServices.createUser({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
    });
    return res.status(200).json({
      data: user,
      messge: "new User created Successfully",
      success: true,
      err: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};

export { registerUser };
