import sequelize from '../config/Database';
import {DataTypes} from 'sequelize';
import Estoque from './Estoque';



const Produto = sequelize.define('produto',{
    nomeProduto:{
        type:DataTypes.STRING(30),allowNull:false
    },
    quantidade:{
        type:DataTypes.INTEGER,allowNull:false
    },
    value:{
        type:DataTypes.FLOAT,allowNull:false

    }
});

export default Produto