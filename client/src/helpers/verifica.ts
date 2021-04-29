import jwt from 'jsonwebtoken';

 const verificaJWT = () =>{
    const token = localStorage.getItem('token');
    const redirect = jwt.decode(token as string);
    if(redirect == null){
        return false
    }
    else{
       return true
    }     
}

export default verificaJWT;