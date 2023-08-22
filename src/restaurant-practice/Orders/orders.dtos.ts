import { IsNotEmpty } from "class-validator";
import { OrderItem } from "./orders.entities/orderitem.entity";
import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";

export class MenuDto  {
    @IsNotEmpty()
    menu_name:string
}
@Injectable()
export class MenuItemDto  {
    @ApiProperty()
    menu_itemname:string
    @ApiProperty()
    price:number;
}

export class createOrderDTo {
    @ApiProperty()
    customerName:string
    @ApiProperty()
    items:OrderItemDTo[];
}

export class OrderItemDTo {
    @ApiProperty()
    menuItemId:number;
    @ApiProperty()
    quantity:number
    
}

export class updateOrderDto {
    @ApiProperty()
    menuItem:string
    @ApiProperty()
    quantity:3
}

export class getOrderDto {
    @ApiProperty()
     order_Id : number
     @ApiProperty()
     customer_Name:string
     @ApiProperty()
     orderDetails: orderDetails[]
     @ApiProperty()
     totalPrice: number
}
export class orderDetails {
    @ApiProperty()
    order_Name: string
    @ApiProperty()
    price: number
}