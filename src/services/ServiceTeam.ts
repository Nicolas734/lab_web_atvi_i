import Team from '../entities/Team';
import db from '../config/db';


class ServiceTeam{
    public async find(){
        try{
            const teams = await db.getRepository(Team).find();
            return teams
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

export default new ServiceTeam();