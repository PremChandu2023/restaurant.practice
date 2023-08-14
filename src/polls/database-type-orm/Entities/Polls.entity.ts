import { Column,  Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Dateschema } from "./date.entity";
import { Option } from "./Options.entity";
import { Votes } from "./Vote.entity";

@Entity('poll')
export class Polls {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    Question:string

    @Column({nullable:true})
    Options:string

    @OneToMany( ()=> Option,(options) => options.poll)
    options: Option[];

    
    

    @Column(() => Dateschema)
    date: Dateschema


}


