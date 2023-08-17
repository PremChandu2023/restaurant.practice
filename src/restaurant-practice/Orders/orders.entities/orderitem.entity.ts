
import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Order } from "./orders.entity";
import { MenuItems } from "./menuitem.entity";

@Entity('orderitem')
export class OrderItem {

    @PrimaryGeneratedColumn()
    orderItem_id:number;

    
    @Column()
    quantity:number;

    @ManyToOne(()=> Order, (orders) => orders.orderItems)
    orders:Order

    @ManyToOne(()=> MenuItems, (menuitems)=> menuitems.OrderItems)
    menuitems:MenuItems

    @Column(() => Dateschema)
    date: Dateschema

}