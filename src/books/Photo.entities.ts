import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { Users } from "./user.entities";


@Entity('photos')
export class Photo {
    @PrimaryGeneratedColumn()
    photo_id : number;

    @Column({nullable:true})
    description:string

    @ManyToOne(()=> Users, (users)=> users.photo)
    user: Users
}