import { Body, Controller, Delete, Get, HttpException, HttpStatus, Param, ParseIntPipe, Patch, Post, Put, Query, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiBearerAuth, ApiTags } from "@nestjs/swagger";
import { OrderServices } from "./order-service";
import { MenuDto, MenuItemDto, createOrderDTo, getOrderDto, updatePaymentDTo } from "./orders.dtos";
import { MenuItems } from "./orders.entities/menuitem.entity";
import { OrderCustomInterceptor } from "./Interceptors/Order.Interceptor";
import { RecentsearchInterceptor } from "../interceptors/interceptor-menu";
import { Roles } from "../custom-decarators/custom-roles-decarator";
import { EmployeeAuthGuard } from "../Auth/auth.Guard";
import { RolesGuard } from "../guards/rolebased.guard";
import { Role } from "../Menu/enums/roles.enums";
import { OrderCustomdecator } from "./orders-swaggers/order-customdecarators";
import { updateOrderDto } from "./order-dtos/oders-updateDto";

@ApiTags("Orders")
@ApiBearerAuth()
@Controller('/order')
@UseInterceptors(RecentsearchInterceptor)
// @UseGuards(EmployeeAuthGuard,RolesGuard)
export class OrderController {
    constructor(private orderService: OrderServices) { }


    @Roles(Role.Manager,Role.Waiter)
    @OrderCustomdecator('Post', '/')
    @Post('/')
    createOrder(@Body() createOrder: createOrderDTo) {
        return this.orderService.createOrder(createOrder);
    }

    @Roles(Role.Manager,Role.Waiter)
    @OrderCustomdecator('Get','/:id')
    @Get('/:id')
    getOrderDetailsById(@Param('id', ParseIntPipe) OrderId: number) {
        return this.orderService.getOrderById(OrderId)
    }

    @Roles(Role.Manager,Role.Waiter)
    @OrderCustomdecator('Get','/byname/:name')
    @Get('/byname/:name')
    async getOrderDetailsByName(@Param('name') customerName: string) {
        return await this.orderService.getOrderByName(customerName)
    }
    @Roles(Role.Manager,Role.Waiter)
    @OrderCustomdecator('Put','/itemquantity:name')
    @Put('/itemquantity:name')
    async updateOrderQuantity(@Param('name') customerName:string, @Body() updateOrder: updateOrderDto) {

        return await this.orderService.updateOrderQuantity(updateOrder, customerName);

    }
    @Roles(Role.Manager,Role.Waiter)
    @Delete(':menuItemid')
    deleteMenuItem(@Param('menuItemid', ParseIntPipe) orderItemId:number) {
       return  this.orderService.deleteMenuItem(orderItemId);
    }

    @Delete(':Orderid')
    async deleteOrder(@Param('id',ParseIntPipe) orderId:number)
    {
        return await this.orderService.deleteOrderById(orderId);
    }
    
    @OrderCustomdecator('Put','/:id/addItem')
    @Put('/:id/addItem')
    addMenuItem(@Param('id', ParseIntPipe) id:number,@Body() updateMenuItem:updateOrderDto)
    {
        return this.orderService.addMenuItem(updateMenuItem,id);
    }


    @Patch(':id/updateStatus')
    updatePaymentStatus(@Body() updateStatus:updatePaymentDTo, @Param('id') id :number)
    {
        return this.orderService.updatePaymentandOrderStatus(updateStatus,id );
    }
}