import { Request, Response } from 'express';
import ServiceTeam from '../services/ServiceTeam';


class TeamController{
    public async findTeams(req:Request, res:Response){
        try{
            const teams = await ServiceTeam.find();
            res.json(teams)
        }catch(error){
            res.status(500).json(error);
        }
    }

    public async findTeamById(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }

    public async createTeam(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    } 

    public async updateTeam(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }

    public async deleteTeam(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }
}

export default new TeamController();