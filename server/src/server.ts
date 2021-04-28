import express from 'express';
import {config as dotenv} from "dotenv";
import {router as UserRouter} from './routes/UserRoute';
import {router as EstoqueRouter} from './routes/EstoqueRoute';
import {router as ProdutoRouter} from './routes/ProdutoRoute';
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
    res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
    next();
  });


// DATABASE CONNECTION
try {
  sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}

//sequelize.sync({force:true})
// ROUTES
app.use('/user',UserRouter);
app.use('/estoque',EstoqueRouter);
app.use('/produto',ProdutoRouter);




app.listen(PORT,() =>{
    console.log('Listen at port localhost:5000');
})


