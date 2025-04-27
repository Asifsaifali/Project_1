import UserRepository from "../repository/user.repository.js";
import nodemailer from "nodemailer";

class UserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async getUser(email) {
    try {
      const user = await this.userRepository.getUser(email);
      return user;
    } catch (error) {
      throw new Error("Error in service");
    }
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("something went wrong");
    }
  }

  async getAllUser() {
    try {
      const allUser = await this.userRepository.getAllUser();
      return allUser;
    } catch (error) {
      throw new Error("Error occured in Services");
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await this.userRepository.getUserByEmail(email);
      return user;
    } catch (error) {
      throw new Error("Error occured in Services");
    }
  }

  async EmailSender(token) {
    try {
      const transporter = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "71fe3c1a64af19",
          pass: "****8f94",
        },
      });

      const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: email,
        subject: "Hello ✔", // Subject line
        text: `<h1>Please click on te following link to verify</h1>
          ${process.env.BASE_URL}/api/v1/users/verify/${token}
        `,
      });

      console.log("Message sent: %s", info.messageId);
    } catch (error) {
      throw new Error("Error occured in Services");
    }
  }

  async verifyUser(token) {
    try {
      const user = await this.userRepository.verifyUser(token);
      return user;
    } catch (error) {
      throw new Error("Error occured in Services");
    }
  }

  async userLogin(email) {
    try {
      const user = await this.userRepository.userLogin(email);
      return user;
    } catch (error) {
      throw new Error("Error occured in Services");
    }
  }
}

export default UserServices;
