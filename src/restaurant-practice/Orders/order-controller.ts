import { Body, Controller, Get, Param, ParseIntPipe, Post, Put, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrderServices } from "./order-service";
import { MenuDto, MenuItemDto, createOrderDTo, getOrderDto, updateOrderDto } from "./orders.dtos";
import { MenuItems } from "./orders.entities/menuitem.entity";
import { OrderCustomInterceptor } from "./Interceptors/Order.Interceptor";
import { RecentsearchInterceptor } from "../interceptors/interceptor-menu";



@Controller('/Orders')
@UseInterceptors(RecentsearchInterceptor)
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
   async  getOrderDetailsByName(@Param('name') customerName:string)
    {
        return await this.orderService.getOrderByName(customerName)
    }
    @Put('/updatordername/:name')
   async  updateOrderQuantity(@Param('name') customerName,@Body() updateOrder:updateOrderDto)
    {
        // console.log('dghhffdhjfga');
        
     return  await this.orderService.updateOrderQuantity(updateOrder,customerName);

    }


}