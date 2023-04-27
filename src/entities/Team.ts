import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({name:"teams"})
class Team{
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable:false, length: 30})
    name: string
}

export default Team