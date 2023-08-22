import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../guards/AUth-guard";
import { RecentsearchInterceptor } from "../interceptors/interceptor-menu";
import { CustomBook } from "../custom-decarators/custom-decarrators-Books";
import { MenuDto, MenuItemDto } from "../Orders/orders.dtos";
import { MenuService } from "./menu-service";
import { Request } from "express";


@ApiTags("Menu")
@Controller('menu')
@UseInterceptors(RecentsearchInterceptor)
export class Menucontroller {
   constructor(private menuService:MenuService){}


@Get()
@UseGuards(AuthGuard)
getAllMenuById( @Req() req: Request)
{
    return this.menuService.getAllItems();
}

@Get(':id/menuitems')
getMenuItemsById(@Param('id') id:number)
{
    return this.menuService.getMenuItemById(id);
}

@Post()
createMenu(@Body() menu:MenuDto)
{    
    return this.menuService.createMenu(menu);
}
@Post(':id/menuitem')
createMenuItem(@Body() menuItem:MenuItemDto,@Param('id', ParseIntPipe) id:number)
{
   return this.menuService.createMenuItem(menuItem,id);
}



}