import { Request, Response } from 'express';
import db from '../config/db';


class ServiceMatch{
    public async find(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }

    public async findById(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }

    public async create(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    } 

    public async update(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }

    public async delete(req:Request, res:Response){
        try{

        }catch(error){
            res.status(500).json(error);
        }
    }
}

export default new ServiceMatch()