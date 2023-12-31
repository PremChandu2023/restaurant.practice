import { Entity, PrimaryGeneratedColumn, Column, OneToOne, JoinColumn, OneToMany } from "typeorm";
import { Profile } from "./Profile";
import { Posts } from "./Post.entity";

@Entity('user')
export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({ nullable: true })
    userFirstName: string;
    
    @Column({ nullable: true })
    userLastName: string;

    @Column({ nullable: true })
    userIncome: number;

    @Column({ nullable: true })
    passWord: string;

    @Column({ nullable: true })
    createdAt: Date;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile;

    @OneToMany(() => Posts, (post) => post.user)
    posts: Posts[];

}