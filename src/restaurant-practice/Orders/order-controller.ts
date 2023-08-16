import { Body, Controller, Get, Param, ParseIntPipe, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrderServices } from "./order-service";
import { MenuDto, MenuItemDto } from "./orders.dtos";
import { MenuItems } from "./orders.entities/menuitem.entity";


@Controller('/Orders')
export class OrderController {
    constructor(private orderService:OrderServices){}

    @Post('menu')
    createMenu(@Body() menu:MenuDto)
    {
        // console.log(menu);
        
        return this.orderService.createMenu(menu);
    }
    @Post(':id/menuitem')
    createMenuItem(@Body() menuItem:MenuItemDto,@Param('id', ParseIntPipe) id:number)
    {
       return this.orderService.createMenuItem(menuItem,id);
    }

}