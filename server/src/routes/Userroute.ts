import express from 'express';
import {createUser, userGet,userPost} from '../controllers/UserController';
export const router = express.Router();



// LIST USERS
router.get('/',userGet);

// LOGIN
router.post('/',userPost);

// CREATE USER

router.post('/create',createUser);




