
import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('orderitem')
export class OrderItem {

    @PrimaryGeneratedColumn()
    orderItem_id:number;
    
    @Column()
    quantity:number;

    @Column(() => Dateschema)
    date: Dateschema

}