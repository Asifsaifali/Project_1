import UserRepository from "../repository/user.repository.js";
import nodemailer from "nodemailer"

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

  async getUserByEmail(email){
    try {
      const user = await this.userRepository.getUserByEmail(email)
      return user;
    } catch (error) {
      throw new Error("Error occured in Services");
    
    }
  }

  async EmailSender(){
    try {
      const transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false, // true for port 465, false for other ports
        auth: {
          user: "maddison53@ethereal.email",
          pass: "jn7jnAPss4f63QBp6D",
        },
      });

      const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <maddison53@ethereal.email>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
      });
    
      console.log("Message sent: %s", info.messageId);

    } catch (error) {
      throw new Error("Error occured in Services");
      
    }
  }

}

export default UserServices;
