import { Request, Response } from 'express';
import ServiceMatch from '../services/ServiceMatch';


class MatchController{
    public async findMatches(req:Request, res:Response){
        try{
            const matches = await ServiceMatch.find(req.body);
            return res.json(matches)
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async findMatchById(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }

    public async createMatch(req:Request, res:Response){
        try{
            const { idhost, idvisitor } = req.body;
            const match = await ServiceMatch.create(idhost, idvisitor);
            return res.json(match);
        }catch(error){
            res.status(500).json(error);
        }
    } 

    public async updateMatch(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }

    public async deleteMatch(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }
}

export default new MatchController();