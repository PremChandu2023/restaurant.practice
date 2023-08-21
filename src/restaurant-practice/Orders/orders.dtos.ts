import { IsNotEmpty } from "class-validator";
import { OrderItem } from "./orders.entities/orderitem.entity";

export class MenuDto  {
    @IsNotEmpty()
    menu_name:string
}
export class MenuItemDto  {
    @IsNotEmpty()
    menu_itemname:string
    
    price:number;
}

export class createOrderDTo {

    customerName:string
    items:OrderItemDTo[];
}

export class OrderItemDTo {
    menuItemId:number;
    quantity:number
    
}

export class updateOrderDto {
    menuItem:string
    quantity:3
}

export class getOrderDto {
     order_Id : number
     customer_Name:string
     orderDetails: orderDetails[]
     totalPrice: number
}
export class orderDetails {
    order_Name: string
    price: number
}