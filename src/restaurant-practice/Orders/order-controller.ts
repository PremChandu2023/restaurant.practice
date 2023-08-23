import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { OrderServices } from "./order-service";
import { MenuDto, MenuItemDto, createOrderDTo, getOrderDto, updateOrderDto } from "./orders.dtos";
import { MenuItems } from "./orders.entities/menuitem.entity";
import { OrderCustomInterceptor } from "./Interceptors/Order.Interceptor";
import { RecentsearchInterceptor } from "../interceptors/interceptor-menu";
import { Roles } from "../custom-decarators/custom-roles-decarator";
import { EmployeeAuthGuard } from "../Auth/auth.Guard";
import { RolesGuard } from "../guards/rolebased.guard";
import { Role } from "../Menu/enums/roles.enums";


@ApiTags("Orders")
@Controller('/Orders')
@UseInterceptors(RecentsearchInterceptor)
@UseGuards(EmployeeAuthGuard,RolesGuard)
export class OrderController {
    constructor(private orderService: OrderServices) { }


    @Roles(Role.Manager,Role.Waiter)
    @Post('/order')
    createOrder(@Body() createOrder: createOrderDTo) {
        return this.orderService.createOrder(createOrder);
    }

    @Roles(Role.Manager,Role.Waiter)
    @Get('/order/:id')
    getOrderDetailsById(@Param('id', ParseIntPipe) OrderId: number) {
        return this.orderService.getOrderById(OrderId)
    }

    @Roles(Role.Manager,Role.Waiter)
    @Get('/ordername/:name')
    async getOrderDetailsByName(@Param('name') customerName: string) {
        return await this.orderService.getOrderByName(customerName)
    }
    @Roles(Role.Manager,Role.Waiter)
    @Put('/updatordername/:name')
    async updateOrderQuantity(@Param('name') customerName, @Body() updateOrder: updateOrderDto) {

        return await this.orderService.updateOrderQuantity(updateOrder, customerName);

    }
    @Roles(Role.Manager,Role.Waiter)
    @Delete('menuItem')
    deleteMenuItem(@Query('OrderId',ParseIntPipe) orderId:number, @Query('menuItem', ParseIntPipe) menuItemId:number) {
       return  this.orderService.deleteMenuItem(orderId,menuItemId)
    }
}