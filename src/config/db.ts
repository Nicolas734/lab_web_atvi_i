import { DataSource } from "typeorm";
import * as dotenv from "dotenv";


dotenv.config();

const USER = process.env.USER || "root";
const PASSWORD = process.env.PASSWORD || "";
const DATABASE = process.env.DATABASE || "";
const HOST = process.env.HOST || "localhost";

const db = new DataSource({
    url: "postgres://euulhvnh:qFhjmR8weU537Ie9HEvjXidDlrzj2wzR@babar.db.elephantsql.com/euulhvnh",
    //database: "bdaula.db",
    type: "postgres",
    // host: HOST,
    // port: 3306,
    // username: USER,
    // password:PASSWORD,
    synchronize: false, 
    logging: false,
    entities: ["src/entities/*.ts"],
    migrations: ["src/migrations/*.ts"],
    subscribers: [],
    maxQueryExecutionTime: 2000
});


db.initialize().then(async(connection)=> {
    console.log("Banco de Dados conectado...");
}). catch ((error)=>{
    console.error('Banco de dados não conectado, erro:', error);
})

export default db;