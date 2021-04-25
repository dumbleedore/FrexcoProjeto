import express from 'express';
import {config as dotenv} from "dotenv";
import {router as UserRouter} from './routes/Userroute';
import User from './models/User';
import sequelize from './config/Database';
const app = express();
dotenv();

//CONFIG APP
app.use(express.urlencoded({extended:true}));
app.use(express.json());
const PORT = 5000;
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,x-access-token");
    next();
  });


// DATABASE CONNECTION
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}
// USADO SÓ UMA VEZ PARA CRIAR DATABASE
//User.sync({force:true})

// ROUTES
app.use('/user',UserRouter);




app.listen(PORT,() =>{
    console.log('Listen at port localhost:5000');
})


