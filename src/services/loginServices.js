import bcrypt from 'bcrypt';
import jsw from 'jsonwebtoken';
import user from '../models/user';
import MessageResponse from '../models/messageResponse';
import httpStatus from 'http-status';
import development from '../config/development';

const login = async (userCredentials)=>{
    const userModel = new user(); 
    const result = await userModel.login(userCredentials.email);
    const isValid = await bcrypt.compareSync(userCredentials.password,result[0].master_password);
    if(!isValid){
        throw new MessageResponse(httpStatus.BAD_REQUEST,httpStatus['400_MESSAGE']);
    }
    else{
        const user = await userModel.getUser(result[0].email);
        const token = jsw.sign(user[0],development.SECRET_KEY,{ expiresIn: '12h' });
        return new MessageResponse(httpStatus.OK,httpStatus['200_MESSAGE'],{token:token});
    }

}

export default {login};