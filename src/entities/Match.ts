import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, JoinColumn } from "typeorm";
import Team from "./Team";


@Entity({name:'matches'})
class Match{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column({type:'date', default:() => "CURRENT_TIMESTAMP"})
    date: Date

    @ManyToOne(type => Team, {onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({
        name:'idhost',
        referencedColumnName:'id'
    })
    host: Team

    @ManyToOne(type => Team, {onDelete:'CASCADE', onUpdate:'CASCADE'})
    @JoinColumn({
        name:'idvisitor',
        referencedColumnName:'id'
    })
    visitor: Team
}

export default Match