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
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      throw new Error("Error in repository file");
    }
  }

  async getAllUser() {
    try {
      const allUser = await User.find();
      return allUser;
    } catch (error) {
      throw new Error("Error in repository file");
    }
  }

  async getUserByEmail(email) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      throw new Error("Error in repository file");
    }
  }

  async verifyUser(token) {
    try {
      const user = await User.findOne({ VerificationToken: token });
      return user;
    } catch (error) {
      throw new Error("Error found in respository");
    }
  }

  async userLogin(email) {
    try {
      const user = await User.findOne({ email });
      return user;
    } catch (error) {
      throw new Error("Error found in respository");
    }
  }

  async deleteUser(email) {
    try {
      const user = await User.deleteOne({email})
      return user;
    } catch (error) {
      throw new Error("Error found in respository");
    }
  }
}

export default UserRepository;
