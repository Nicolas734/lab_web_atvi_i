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
            console.log(error);
        }
    }

    public async findById(){
        try{

        }catch(error){
            console.log(error);
        }
    }

    public async create(){
        try{

        }catch(error){
            console.log(error);
        }
    } 

    public async update(){
        try{

        }catch(error){
            console.log(error);
        }
    }

    public async delete(){
        try{

        }catch(error){
            console.log(error);
        }
    }
}

export default new ServiceMatch()