import User from "../model/User.model.js";

class UserRepository {
  async createUser(data) {
    try {
      const user = await User.create(data);
      return user;
    } catch (error) {
      console.log(error);
    }
  }

  async getUser(email) {
    const user = await User.findOne({ email  });
    // console.log(user);
    return user;
  }
}

export default UserRepository;
