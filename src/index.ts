import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import routes from "./routes";
import db from "./config/db";



dotenv.config();
const PORT = process.env.PORT || 3004;


const app = express();

db.initialize().then(async(connection)=> {
    console.log("Banco de Dados conectado...");
}). catch ((error)=>{
    console.error('Banco de dados não conectado, erro:', error);
});

app.use(express.json());
app.use(cors());


app.use(routes);


app.listen(PORT, ()=>console.log(`Servidor rodando na porta ${PORT}`));
