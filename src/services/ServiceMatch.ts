import Match from '../entities/Match';
import Team from '../entities/Team';
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

    public async create(idhost:number, idvisitor:number){
        try{
            const host = await db.getRepository(Team).findOneBy({id:idhost});
            const visitor = await db.getRepository(Team).findOneBy({id:idvisitor});
            const match = new Match();
            match.host = host;
            match.visitor = visitor;
            match.date = new Date();
            return match;
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