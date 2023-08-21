import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { OrderItem } from "./orderitem.entity";

@Entity('orders')
export class Order {

    @PrimaryGeneratedColumn()
    order_id:number;

    @Column()
    customerName:string;

    @OneToMany(()=> OrderItem, (orderitems)=> orderitems.orders, {eager:true})
    orderItems:OrderItem[];


    @Column(() => Dateschema)
    date: Dateschema

}