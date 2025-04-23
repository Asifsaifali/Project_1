import UserRepository from "../repository/user.repository.js";

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
}

export default UserServices;
