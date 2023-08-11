import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Dateschema } from "./date.entity";
import { Polls } from "./Polls.entity";
import { Votes } from "./Vote.entity";


@Entity('options')
export class Option {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    text:string

    @ManyToOne(() => Polls, (polls) => polls.options )
    @JoinColumn()
    poll:Polls

    @ManyToMany(() => Votes, (option) => option.options , {eager:true})
    votes:Votes[];

    @Column(() => Dateschema)
    date: Dateschema
}