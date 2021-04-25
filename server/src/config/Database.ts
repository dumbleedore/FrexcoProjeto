// DATABASE CONFIG
import {Sequelize} from 'sequelize';
import {config as dotenv} from "dotenv";
dotenv();
const sequelize = new Sequelize('frexco', 'postgres', process.env.PASSWORD as string, {
    host: 'localhost',
    dialect: 'postgres'/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
  });


export default sequelize;