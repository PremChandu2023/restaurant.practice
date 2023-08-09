import { Entity,PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    userName:string;

    @Column({nullable:true})
    passWord: string
    
    @Column({nullable:true})
    createdAt: Date
}