import MatchController from "../controllers/MatchController";
import { Router } from "express";


const routes = Router();

routes.get('/match', MatchController.findMatches);
routes.get('/match/:id', MatchController.findMatchesById);
routes.post('/match', MatchController.createMatch);
routes.put('/match', MatchController.updateMatch);
routes.delete('/match', MatchController.deleteMatch);


export default routes