import { Column, Entity,JoinTable, ManyToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dateschema } from "./date.entity";
import { Option } from "./Options.entity";


@Entity('votes')
export class Votes {
    @PrimaryGeneratedColumn()
    id:number;

    @ManyToMany(()=> Option, (votes) => votes.votes)
    @JoinTable()
    options:Option[];
    
    @Column(() => Dateschema)
    date: Dateschema
}