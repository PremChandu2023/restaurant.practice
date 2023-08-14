import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./category.entity";
import { Photo } from "./Photo.entities";


@Entity('users')
export class Users {
    @PrimaryGeneratedColumn()
    user_id : number;

    @Column()
    name:string

    @OneToMany(()=> Photo, (photos) => photos.user)
    photo:Photo[];
}