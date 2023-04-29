import express from "express";
import cors from "cors";
import * as dotenv from "dotenv";
import TeamsRouter from "./routes/teamRoutes";
import MatchRouter from "./routes/matchRoutes";



dotenv.config();
const PORT = process.env.PORT || 3004;


const app = express();

app.use(express.json());
app.use(cors());

app.use(TeamsRouter);
app.use(MatchRouter);


app.listen(PORT, ()=>console.log(`Servidor rodando na porta ${PORT}`));
