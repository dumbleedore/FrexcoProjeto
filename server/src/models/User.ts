import sequelize from '../config/Database';
import {DataTypes} from 'sequelize';


const User = sequelize.define('User',{

username : {
    type:DataTypes.STRING(30),
    allowNull:false   
},
password : {
    type:DataTypes.STRING(30),
    allowNull:false   
}
})
export default User;