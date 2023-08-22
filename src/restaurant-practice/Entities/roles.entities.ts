import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { Employee } from "src/restaurant-practice/Entities/employee.entity";

@Entity('roles')
export class Roles {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string

    @OneToMany(() => Employee, (employees) => employees.roles)
    employees: Employee[]

    @Column(() => Dateschema)
    date: Dateschema
}