import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../guards/Auth-guard";
import { RecentsearchInterceptor } from "../interceptors/interceptor-menu";
import { CustomBook } from "../custom-decarators/custom-decarrators-Books";
import { MenuDto, MenuItemDto } from "../Orders/orders.dtos";
import { MenuService } from "./menu-service";
import { Request } from "express";
import { EmployeeAuthGuard } from "../Auth/auth.Guard";
import { RolesGuard } from "../guards/rolebased.guard";
import { Role } from "./enums/roles.enums";
import { Roles } from "../custom-decarators/custom-roles-decarator";


@ApiTags("Menu")
@Controller('menu')
@UseInterceptors(RecentsearchInterceptor)
@Roles(Role.Manager)
@UseGuards(EmployeeAuthGuard,RolesGuard)
export class Menucontroller {
   constructor(private menuService:MenuService){}


@Get()
@Roles(Role.Waiter)
getAllMenu( )
{
    return this.menuService.getAllItems();
}

@Roles(Role.Waiter)
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
@Roles(Role.Waiter)
@Post(':id/menuitem')
createMenuItem(@Body() menuItem:MenuItemDto,@Param('id', ParseIntPipe) id:number)
{
   return this.menuService.createMenuItem(menuItem,id);
}
}