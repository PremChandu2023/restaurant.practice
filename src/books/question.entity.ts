import { Column, Entity, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";


@Entity('questions')
export class Question {
    @PrimaryGeneratedColumn()
    question_id : number;

    @Column()
    title:string

    @ManyToMany(()=> Category, (questions) => questions.question)
    @JoinTable()
    category:Category[]
}