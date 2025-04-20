import User from  "../model/User.model"

class UserRepository{

    async createUser(data) {
        try {
           const existinguser = User.findOne({email})
           if(existinguser){
             return res.status(400).json({
                message : "User already exist"
             })
           }
            const user = await User.create(data);
            return user;
        } catch (error) {
            console.log(error);    
        }
    }
}

export default UserRepository;