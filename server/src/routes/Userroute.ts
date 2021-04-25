import express from 'express';
import {userGet,userPost} from '../controllers/UserController';
export const router = express.Router();



// LIST USERS
router.get('/',userGet);

// LOGIN
router.post('/',userPost);






