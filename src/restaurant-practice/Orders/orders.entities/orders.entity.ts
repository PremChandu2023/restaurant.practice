import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn()
    order_id:number;

    @Column(() => Dateschema)
    date: Dateschema

}