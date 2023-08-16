import { Injectable } from "@nestjs/common";
import { Menuservice } from "../Menu/menu-service";
import { Tablemenu } from "../Menu/table-menu";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Menu } from "./orders.entities/menu.entity";
import { MenuItems } from "./orders.entities/menuitem.entity";
import { Order } from "./orders.entities/orders.entity";
import { OrderItem } from "./orders.entities/orderitem.entity";
import { MenuDto, MenuItemDto } from "./orders.dtos";


@Injectable()
export class OrderServices {
    constructor(@InjectRepository(Menu) private menuRespository: Repository<Menu>,@InjectRepository(MenuItems) private menuItemRespository: Repository<MenuItems>,@InjectRepository(Order) private orderRespository: Repository<Order>,@InjectRepository(OrderItem) private orderItemRespository: Repository<OrderItem>){}

    createMenu(menu:MenuDto)
    {
        // console.log(menu);
        
      const newMenu= this.menuRespository.create({menu_name: menu.menu_name});

       return this.menuRespository.save(newMenu);
    }
    async createMenuItem(menuItem:MenuItemDto,id:number)
    {
        const newMenu = await this.menuRespository.findOneBy({menu_id:id})
       const newmenuItem= this.menuItemRespository.create(menuItem);

       return this.menuItemRespository.save(newmenuItem);
    }


}