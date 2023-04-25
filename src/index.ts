import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";


dotenv.config();

const PORT = process.env.PORT || 3004;

const app = express();

app.use(express.json());
app.use(cors());

app.listen(PORT, ()=>console.log(`Servidor rodando na porta ${PORT}`));
