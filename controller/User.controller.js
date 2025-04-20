import UserServices from "../service/user.services.js";
import crypto from "crypto";
const userServices = new UserServices();

const registerUser = async (req, res) => {
  try {

    const PassValidation = (str) => {
      return /[A-Z]/.test(str);
    };
    const pass = String(req.body.password);
    console.log(pass);
    console.log(pass.length);
    
    if (pass.length <= 5 && /[A-Z]/.test(pass)) {
     return res.status(500).json({
        message: "Password must be greater than 5 characters",
        success: false,
        err: "Not fullfill the credentials",
      });
    }
      if (!(req.body.name) || !(req.body.email) || !(req.body.password)) {
        return res.status(400).json({
          message: "All fields are required",
        });
      }
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
