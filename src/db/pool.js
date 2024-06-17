/* import mysql from "mysql" */
import development from "../config/development";
import mysql from 'mysql2/promise';

 export default mysql.createPool({
    host: development.DB_HOST,
    user: development.DB_USER,
    password: development.DB_PASSWORD,
    database: development.DB_NAME,
    port: development.DB_PORT
}) 