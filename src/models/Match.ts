import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Team from "./Team";


@Entity({name:'matches'})
class Match{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    date: Date

    @ManyToOne(type => Team)
    @JoinColumn({
        name:'idHost',
        referencedColumnName:'id'
    })
    idHost: Team

    @ManyToOne(type => Team)
    @JoinColumn({
        name:'idVisitor',
        referencedColumnName:'id'
    })
    idVisitor: Team
}

export default Match