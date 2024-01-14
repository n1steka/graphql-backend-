import { getUserByEmail } from "./controllers/user.js"
import jwt from "jsonwebtoken";

const secret =  "eyJhbGciOiJIUzI1NiIsInR";
export async function handleLogin(req ,res ) {
     const { email , password } =  req.body  
     const user = await getUserByEmail(email)
     if(!user || user.password !== password) {
        return res.sendStatus(401)
     }
     const data = { 
        sub : user.id  , 
        email : user.email
     }
     const token = jwt.sign(data , secret);
    res.json({token})
}