import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";


@Entity({name:"teams"})
class Team{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
}

export default Team