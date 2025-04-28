import jwt from "jsonwebtoken";

const isLoggedin = (req, res, next)=>{
    try {
        let token = req.cookies?.token
        console.log("token is : ",token);
         if(!token){
            return res.status(400).json({
                success : false,
                message : "Authentication failed"
            })
         }

         const decoded = jwt.verify(token, process.env.JWT_SECRET)
         req.user = decoded
         next()
    } catch (error) {
        console.log("failure in middleware");
        return res.status(500).json({
            message : "Internal server error ",
            success : false
        })
    }

    next()
}

export default isLoggedin