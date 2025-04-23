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
      const user = await User.findOne({ email  });
    return user;
    } catch (error) {
      throw new Error("Error in repository file");
        
    }
  }

  async getAllUser(){
    try {
      const allUser = await User.find()
      return allUser
    } catch (error) {
       throw new Error("Error in repository file");
       
    }
  }

  async getUserByEmail(email){
    try {
       const user = await User.findOne({email})
       return user;
    } catch (error) {
      throw new Error("Error in repository file");
    }
  }
}

export default UserRepository;
