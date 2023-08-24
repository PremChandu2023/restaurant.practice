import { IsArray, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator";
import { OrderItem } from "./orders.entities/orderitem.entity";
import { Injectable } from "@nestjs/common";
import { ApiProperty } from "@nestjs/swagger";
import { OrderStatus } from "../Menu/enums/order.enum";
import { PaymentStatus } from "../Menu/enums/payment.enum";

export class MenuDto  {
    @IsNotEmpty()
    menu_name:string
}
@Injectable()
export class MenuItemDto  {
    @ApiProperty({example : 'Pancakes'})
    menu_itemname:string
    @ApiProperty({example : 20})
    @IsNotEmpty()
    price:number;
}
@Injectable()
export class OrderItemDTo {
    @ApiProperty({example : 1})
    @IsNumber()
    @IsNotEmpty()
    menuItemId:number;

    @ApiProperty({example : 2})
    @IsNumber()
    @IsNotEmpty()
    quantity:number
    
}
@Injectable()
export class createOrderDTo {
    @ApiProperty({example : "premchandu"})
    @IsString()
    @IsNotEmpty({message: 'IT SHORLOFJEHF'})
    customerName:string

    @ApiProperty({example :20 })
    tableNumber: number

    
    @ApiProperty({ type : [OrderItemDTo] ,example : [ {
        "menuItemId": 3,
        "quantity": 1
    }, {
        "menuItemId": 4,
        "quantity": 1
    }]})
    items:OrderItemDTo[];
}


@Injectable()
export class updateOrderDto {
    @ApiProperty({example : 'Pancakes'})
    menuItem:string
    @ApiProperty({example : 10})
    quantity:3
}
@Injectable()
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
@Injectable()
export class orderDetails {
    @ApiProperty()
    order_Name: string
    @ApiProperty()
    price: number
    @ApiProperty()
    tax : number
}
@Injectable()
export class updatePaymentDTo {
    @ApiProperty({type : IsEnum})
    orderStatus: PaymentStatus;
}