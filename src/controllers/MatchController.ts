import { Request, Response } from 'express';


class MatchController{
    public async findMatchs(req:Request, res:Response){
        try{

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