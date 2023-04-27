import Team from '../entities/Team';
import db from '../config/db';
import { Like } from 'typeorm';


class ServiceTeam{
    public async find(){
        try{
            const teams = await db.getRepository(Team).find();
            return teams
        }catch(error){
            console.log(error);
        }
    }

    public async findByTermo(termo){
        try{
            const teams = await db.getRepository(Team).find({
                where:{
                    name: Like(`%${termo}%`)
                }
            });
            return teams;
        }catch(error){
            console.log(error);
        }
    }

    public async create(name){
        try{
            const team = new Team();
            team.name = name
            await db.getRepository(Team).save(team);
            return team;
        }catch(error){
            throw error
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