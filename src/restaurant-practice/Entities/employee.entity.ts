import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Roles } from "../Orders/orders.entities/employee.entites";
import { publicEncrypt } from "crypto";


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

    @ManyToOne(() => Roles, (roles) => roles.employees)
    roles:Roles

    @Column(() => Dateschema)
    date:Dateschema
}