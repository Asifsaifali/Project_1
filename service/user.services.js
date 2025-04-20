import UserRepository from "../repository/user.repository.js";

class UserServices {
  constructor() {
    this.userRepository = new UserRepository();
  }

  async createUser(data) {
    try {
      const user = await this.userRepository.createUser(data);
      return user;
    } catch (error) {
      console.log("something went wrong");
    }
  }
}

export default UserServices;
