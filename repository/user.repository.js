import User from  "../model/User.model.js"

class UserRepository{

    async createUser(data) {
        try {
        //    const existinguser = await User.findOne(data.email)
        //    if(existinguser){
        //      return res.status(400).json({
        //         message : "User already exist"
        //      })
        //    }
           
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log(error);    
        }
    }
}

export default UserRepository;