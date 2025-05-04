import UserServices from "../service/user.services.js";
import bcrypt from "bcrypt";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import {
  PassValidation,
  emailValidation,
  hashPassword,
} from "../utils/index.js ";

const userServices = new UserServices();

const registerUser = async (req, res) => {
  try {
    const pass = String(req.body.password);
    if (pass.length <= 5 && pass.length < 15) {
      return res.status(500).json({
        message: "Password must be greater than 5 characters ",
        success: false,
        err: "Not fullfill the credentials",
      });
    } else if (!PassValidation(pass)) {
      return res.status(500).json({
        message: "Password must be contain at least one uppercase letter",
        success: false,
        err: "Not fullfill the credentials",
      });
    }
    //***************Email formating
    const email = String(req.body.email);
    if (!emailValidation(email)) {
      return res.status(500).json({
        mesasge: "Email must be in valid format",
        success: false,
        err: "Not fullfill the credentials",
      });
    }
    //******************User existance
    const existUser = await userServices.getUser(email);
    if (existUser) {
      return res.status(400).json({
        message: "User with this email already exist, signUp with another mail",
        success: false,
        err: "User already exist",
      });
    }

    //**************All fields are required
    if (!req.body.name || !req.body.email || !req.body.password) {
      return res.status(400).json({
        message: "All fields are mandatory",
      });
    }

    const hased = await hashPassword(req.body.password);
    //***************User Creation

    const user = await userServices.createUser({
      name: req.body.name,
      email: req.body.email.toLowerCase(),
      password: hased,
    });
    const token = crypto.randomBytes(32).toString("hex");
    user.VerificationToken = token;
    await user.save();
    return res.status(200).json({
      data: user,
      messge: "New User Created Successfully",
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

  //****************************************/
};

const getUserByEmail = async (req, res) => {
  try {
    const userEmail = emailValidation(req.body.email);
    if (!userEmail) {
      return res.status(400).json({
        data: {},
        message: "kindlly enter email in lower case",
        err: {},
      });
    }
    const user = await userServices.getUserByEmail(req.body.email);
    return res.status(200).json({
      data: user,
      success: true,
      message: "User with this email fetched successfully",
    });
  } catch (error) {
    res.status(400).json({
      data: {},
      success: false,
      err: error,
    });
  }
};

const getAllUser = async (req, res) => {
  try {
    const allUser = await userServices.getAllUser();
    return res.status(200).json({
      data: allUser,
      status: "successfully fetched all user",
      err: {},
    });
  } catch (error) {
    res.status(400).json({
      data: {},
      success: false,
      err: error,
    });
  }
};

const verifyUser = async (req, res) => {
  try {
    const { token } = req.params;
    const user = await userServices.verifyUser(token);
    if (!user) {
      return res.status(400).json({
        message: "No User found",
        success: false,
      });
    }
    return res.status(200).json({
      data: user,
      message: "User found with given token",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      data: {},
      success: false,
      err: error,
    });
  }
};

const userLogin = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email) {
      return res.status(400).json({
        message: "No User found",
        success: false,
      });
    }
    const user = await userServices.userLogin(email);
    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      res.status(400).json({
        data: {},
        success: false,
        err: error,
      });
    }
    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      {
        expiresIn: "24h",
      }
    );

    const cookieOption = {
      httpOnly: true,
      secure: true,
      maxAge: 24 * 60 * 60 * 1000,
    };
    res.cookie("token", token, cookieOption);

    return res.status(200).json({
      message: `${user.name} logged in successfully`,
      success: true,
      token: user.VerificationToken,
    });
  } catch (error) {
    res.status(400).json({
      data: {},
      success: false,
      err: error,
    });
  }
};

const userProfile = async (req, res) => {
  try {
    const user = req.user;
    console.log("in profile section");
    console.log(user);
  } catch (error) {}
};

const deleteUser = async (req, res) => {
  try {
    const email = req.body.email;
    const user = await userServices.userRepository.deleteUser(email);
    if (!user.deletedCount)
      return res.status(400).json({
        message: "No User found with this email",
      });
    return res.status(200).json({
      data: user,
      message: "User Deleted with given email successfully",
      success: true,
    });
  } catch (error) {
    res.status(400).json({
      data: {},
      success: false,
      err: error,
    });
  }
};

const resetPassword = async (req, res) => {};
export {
  registerUser,
  getAllUser,
  getUserByEmail,
  verifyUser,
  userLogin,
  userProfile,
  resetPassword,
  deleteUser,
};
