import Match from '../entities/Match';
import db from '../config/db';


class ServiceMatch{
    public async find(){
        try{
            const matches = await db.getRepository(Match).find({
                relations:{
                    host:true,
                    visitor:true
                }
            });
            return matches
        }catch(error){
            throw error;
        }
    }

    public async findById(){
        try{

        }catch(error){
            throw error;
        }
    }

    public async create(){
        try{

        }catch(error){
            throw error;
        }
    } 

    public async update(){
        try{

        }catch(error){
            throw error;
        }
    }

    public async delete(){
        try{

        }catch(error){
            throw error;
        }
    }
}

export default new ServiceMatch()