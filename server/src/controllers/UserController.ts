import {Request,Response} from 'express';
import User from '../models/User';
import jwt from 'jsonwebtoken'
 import {config as dotenv} from "dotenv";
 dotenv();
export const userGet = async (req : Request,res : Response) =>{
 const Users = await User.findAll();
 res.status(200).json(Users);
};

export const userPost = async(req:Request, res:Response) =>{
  let user = req.body;
  console.log(user);
  const query = await User.findOne({where:{username: user.username,password : user.password}}).then((data) =>{
    user = data?.get({ plain: true });
    if(user === undefined){
      res.status(200).json({message:'This user does not exist'});
    }
    else
    {
      const id = user.id;
      const username = user.username;
      const token = jwt.sign({ id,username }, process.env.SECRET as string, {
        expiresIn: 300 // expires in 5min
      });
      return res.status(200).json({auth:true,token:token,id:id,username:username});
    }
  });
  }
  export const createUser = async(req:Request,res : Response) =>{
    const body = req.body;
    User.create({
      username : body.username,
      password : body.password
    }).then(async(user) =>{
      await user.save();
    } ).then(() =>{
      res.status(200).json({message:'USER CREATED'});
    })
}