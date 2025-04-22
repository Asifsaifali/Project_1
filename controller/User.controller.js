import UserServices from "../service/user.services.js"; 
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
    const existUser = await userServices.getUser(email)
    if(existUser) {
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

const getAllUser = async(req,res)=>{
 try {
    const allUser = await userServices.getAllUser()
    return res.status(200).json({
      data : allUser,
      status : "successfully fetched all user",
      err : {}
    })
 } catch (error) {
    res.status(400).json({
      data : {},
      success : false,
      err : error
    })
 }
}

export { registerUser, getAllUser };
