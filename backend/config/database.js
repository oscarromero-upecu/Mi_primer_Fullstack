import { Sequelize } from "sequelize";  
const db = new Sequelize ('mern_db', 'root','Program.10',
{
    host:"localhost",
    dialect: "mysql"
});      
export default db;