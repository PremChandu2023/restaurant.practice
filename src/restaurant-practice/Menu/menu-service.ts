import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Menu } from "../Orders/orders.entities/menu.entity";
import { Repository } from "typeorm";
import { MenuItems } from "../Orders/orders.entities/menuitem.entity";
import { MenuDto, MenuItemDto } from "../Orders/orders.dtos";

@Injectable()
export class MenuService {
    constructor(@InjectRepository(Menu) private menuRepository:Repository<Menu>,
    @InjectRepository(MenuItems) private menuItemsRepository:Repository<MenuItems>){}

    async createMenu(menu: MenuDto) {
        const newMenu = this.menuRepository.create({ menu_name: menu.menu_name });

        return await this.menuRepository.save(newMenu);
    }
    async createMenuItem(menuItem: MenuItemDto, id: number) {
        const newMenu = await this.menuRepository.findOneBy({ menu_id: id })
        const newmenuItem = this.menuItemsRepository.create(menuItem);
        newmenuItem.menus = newMenu
        await this.menuRepository.save(newMenu);
        const savedMenuitem = await this.menuItemsRepository.save(newmenuItem);
        return savedMenuitem;
    }
   async getAllItems()
    {
       return await this.menuItemsRepository.find();
    }
    async getMenuItemById(id:number)
    {
        const newMenuItem = await this.menuItemsRepository.findOne({where : {menuitem_id : id}})
        return newMenuItem;
    }


}