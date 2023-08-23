import { Dateschema } from "src/polls/database-type-orm/Entities/date.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { MenuItems } from "./menuitem.entity";
import { Exclude } from "class-transformer";

@Entity('menu')
export class Menu {

    @PrimaryGeneratedColumn()
    menu_id:number;

    @Column()
    menu_name:string;
    
    @OneToMany(()=> MenuItems, (menuitems)=>menuitems.menus)
    menuItems:MenuItems[]

    @Exclude()
    @Column(() => Dateschema)
    date: Dateschema

}