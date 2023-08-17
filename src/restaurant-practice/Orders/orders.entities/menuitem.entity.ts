import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Menu } from "./menu.entity";
import { OrderItem } from "./orderitem.entity";

@Entity('menuitems')
export class MenuItems {

    @PrimaryGeneratedColumn()
    menuitem_id:number;

    @Column({nullable:true})
    menu_itemname:string;

    @Column({nullable:true})
    price:number

    @ManyToOne(()=> Menu, (menus)=> menus.menuItems)
    menus:Menu

    @OneToMany(()=> OrderItem, (orderitems)=> orderitems.menuitems)
    OrderItems:OrderItem[]

    @Column(() => Dateschema)
    date: Dateschema

}