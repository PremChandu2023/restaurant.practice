import { Column, Entity, ManyToOne, PrimaryGeneratedColumn, Tree } from "typeorm";
import { User } from "./User";

@Entity("user_posts")
export class Posts {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({nullable:true})
    title:string

    @Column({nullable:true})
    description: string

    @ManyToOne(() => User, (users)=>{users.posts})
    user:User;
}