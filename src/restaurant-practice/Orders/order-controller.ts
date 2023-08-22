import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrderServices } from "./order-service";
import { MenuDto, MenuItemDto, createOrderDTo, getOrderDto, updateOrderDto } from "./orders.dtos";
import { MenuItems } from "./orders.entities/menuitem.entity";
import { OrderCustomInterceptor } from "./Interceptors/Order.Interceptor";
import { RecentsearchInterceptor } from "../interceptors/interceptor-menu";


@ApiTags("Orders")
@Controller('/Orders')
@UseInterceptors(RecentsearchInterceptor)
export class OrderController {
    constructor(private orderService: OrderServices) { }


    // @Post(':id/menuitem')
    // createMenuItem(@Body() menuItem:MenuItemDto,@Param('id', ParseIntPipe) id:number)
    // {
    //    return this.orderService.createMenuItem(menuItem,id);
    // }

    @Post('/order')
    createOrder(@Body() createOrder: createOrderDTo) {
        return this.orderService.createOrder(createOrder);
    }


    @Get('/order/:id')
    getOrderDetailsById(@Param('id', ParseIntPipe) OrderId: number) {
        return this.orderService.getOrderById(OrderId)
    }

    @Get('/ordername/:name')
    async getOrderDetailsByName(@Param('name') customerName: string) {
        return await this.orderService.getOrderByName(customerName)
    }
    @Put('/updatordername/:name')
    async updateOrderQuantity(@Param('name') customerName, @Body() updateOrder: updateOrderDto) {

        return await this.orderService.updateOrderQuantity(updateOrder, customerName);

    }
    @Delete('menuItem')
    deleteMenuItem(@Query('OrderId',ParseIntPipe) orderId:number, @Query('menuItem', ParseIntPipe) menuItemId:number) {
       return  this.orderService.deleteMenuItem(orderId,menuItemId)
    }
}