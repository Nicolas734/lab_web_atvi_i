import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import db from "./config/db";


dotenv.config();

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.json());
app.use(cors());

db.initialize().then(async(connection)=> {
    await connection.synchronize()
    console.log("Banco de Dados conectado...");
}). catch ((error)=>{
    console.error('Banco de dados não conectado, erro:', error);
})

app.listen(PORT, ()=>console.log(`Servidor rodando na porta ${PORT}`));
