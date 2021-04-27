import sequelize from '../config/Database';
import {DataTypes} from 'sequelize';
import Produto from './Produto'



const Estoque = sequelize.define('estoque',{
    nomeEstoque:{
        type:DataTypes.STRING(30),
        allowNull:false
    },
});


export default Estoque;