import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_profile')
export class Profile {
    @PrimaryGeneratedColumn()
    id:number

    @Column({nullable:true})
    firstName :string;
    @Column({nullable:true})
    lastName:string;

    @Column({nullable:true})
    age:number;

    @Column({nullable:true})
    Address: string;

    @Column({nullable:true})
    dob: string


}