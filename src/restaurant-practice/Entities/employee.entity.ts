import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "./roles.entities";
import { publicEncrypt } from "crypto";
import * as bycrypt from 'bcrypt';


@Entity('employees')
export class Employee {
    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true})
    employee_Id:string

    @Column({nullable:false})
    employee_Name: string

    @Column()
    status:string //active or inactive

    @Column()
    email:string

    @Column()
    password:string

    @Column()
    phoneNumber:number

    @ManyToOne(() => Roles, (roles) => roles.employees, {eager : false})
    roles:Roles

    @Column(() => Dateschema)
    date:Dateschema

    @BeforeInsert()
    hashPassword() {
        this.password= bycrypt.hashSync(this.password, 10);
    }
}