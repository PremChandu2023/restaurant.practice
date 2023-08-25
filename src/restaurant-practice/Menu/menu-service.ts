import { BadRequestException, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Menu } from "../Orders/orders.entities/menu.entity";
import { Repository } from "typeorm";
import { MenuItems } from "../Orders/orders.entities/menuitem.entity";
import { MenuDto, MenuItemDto } from "../Orders/orders.dtos";
import { classToPlain } from "class-transformer";
import { getMenuItemDto } from "./menu-dtos";

@Injectable()
export class MenuService {
    constructor(@InjectRepository(Menu) private menuRepository:Repository<Menu>,
    @InjectRepository(MenuItems) private menuItemsRepository:Repository<MenuItems>){}

    async createMenu(menu: MenuDto) {
        const newMenu = this.menuRepository.create({ menu_name: menu.menu_name });

        return await this.menuRepository.save(newMenu);
    }
    async addMenuItem(menuItem: MenuItemDto, id: number) {
        const newMenu = await this.menuRepository.findOneBy({ menu_id: id })
        if(!newMenu)
        {
            throw new BadRequestException({error: 'Invalid Id',message : "Given_menuId_is_not_available_in_database"})
        }
        const newmenuItem = this.menuItemsRepository.create(menuItem);
        newmenuItem.menus = newMenu
        await this.menuRepository.save(newMenu);
        const savedMenuitem = await this.menuItemsRepository.save(newmenuItem);
        return savedMenuitem;
    }
   async getAllItems()
    {
        const result =await this.menuItemsRepository.find();
        console.log(result);
        
        return result;
    }
    async getMenuItemById(id:number)
    {
        const newMenuItem = await this.menuItemsRepository.findOne({where : {menuitem_id : id}, relations : ['menus']})
        console.log(newMenuItem.menus.menu_name);
        
        if((newMenuItem.menus.menu_name)=== null)
        {
            throw new BadRequestException('Menutype_is_not_found_with_requested_id');
        }
        console.log(newMenuItem);
        
        if(!newMenuItem)
        {
            throw new HttpException({message : 'Given_id_is_not_found'}, HttpStatus.BAD_REQUEST)
        }
        const newMenuItems : getMenuItemDto = {
            menu_itemname : newMenuItem.menu_itemname,
            menuitem_id: newMenuItem.menuitem_id,
            menu_type : newMenuItem.menus.menu_name,
            price: newMenuItem.price
        }
        return newMenuItems;
    }


}