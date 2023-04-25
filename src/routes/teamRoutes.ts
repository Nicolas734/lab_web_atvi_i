import { Router } from "express";


const routes = Router();


routes.get('/team');
routes.get('/team/:termo');
routes.post('/team');
routes.put('/team');
routes.delete('/team');


export default routes;