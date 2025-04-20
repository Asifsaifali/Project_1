import UserServices from "../service/user.services.js";

const userServices = new UserServices();

const registerUser = async (req, res) => {

  const { name, email, password } = req.body;
  if (!name || !email || !password) {
    return res.status(400).json({
      message: "All fields are required",
    });
  }
  res.status(200).json({
    data: req.body,
    message: "Successfully post the data",
    success: true,
  });
};

export { registerUser };
