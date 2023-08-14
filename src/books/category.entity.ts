import { Column, Entity, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Question } from "./question.entity";

@Entity('categories')
export class Category {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    title:string;

    @ManyToMany(() => Question, (categories) => categories.category, {eager:true})
    question:Question

}