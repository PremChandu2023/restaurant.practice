import { Body, Controller, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrderServices } from "./order-service";
import { MenuDto, MenuItemDto, createOrderDTo, updateOrderDto } from "./orders.dtos";
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

    @Post('/order')
    createOrder(@Body() createOrder:createOrderDTo)
    {
        return this.orderService.createOrder(createOrder);
    }


    @Get('/order/:id')
    getOrderDetailsById(@Param('id', ParseIntPipe) OrderId:number)
    {
        return this.orderService.getOrderById(OrderId)
    }

    @Get('/ordername/:name')
    getOrderDetailsByName(@Param('name') OrderName:string)
    {
        return this.orderService.getOrderByName(OrderName)
    }
    @Put('/ordername/:name')
    updateOrderQuantity(@Param('name') customerName,@Body() updateOrder:updateOrderDto)
    {
       return  this.orderService.updateOrderQuantity(updateOrder,customerName)
    }


}