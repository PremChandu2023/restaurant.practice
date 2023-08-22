import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { Tablemenu } from "../Menu/table-menu";
import { InjectRepository } from "@nestjs/typeorm";
import { QueryBuilder, Repository } from "typeorm";
import { Menu } from "./orders.entities/menu.entity";
import { MenuItems } from "./orders.entities/menuitem.entity";
import { Order } from "./orders.entities/orders.entity";
import { OrderItem } from "./orders.entities/orderitem.entity";
import { MenuDto, MenuItemDto, createOrderDTo, getOrderDto, orderDetails, updateOrderDto } from "./orders.dtos";


@Injectable()
export class OrderServices {
    constructor(@InjectRepository(Menu) private menuRespository: Repository<Menu>, @InjectRepository(MenuItems) private menuItemRespository: Repository<MenuItems>, @InjectRepository(Order) private orderRespository: Repository<Order>, @InjectRepository(OrderItem) private orderItemRespository: Repository<OrderItem>) { }

    createMenu(menu: MenuDto) {
        // console.log(menu);

        const newMenu = this.menuRespository.create({ menu_name: menu.menu_name });

        return this.menuRespository.save(newMenu);
    }
    async createMenuItem(menuItem: MenuItemDto, id: number) {
        const newMenu = await this.menuRespository.findOneBy({ menu_id: id })
        const newmenuItem = this.menuItemRespository.create(menuItem);
        newmenuItem.menus = newMenu
        await this.menuRespository.save(newMenu);
        const savedMenuitem = await this.menuItemRespository.save(newmenuItem);
        return savedMenuitem;
    }
    async createOrder(createOrder: createOrderDTo) {
        const newOrder = this.orderRespository.create();
        newOrder.customerName = createOrder.customerName;
        const savedOrder = await this.orderRespository.save(newOrder);
        for (const OrderItemdata of createOrder.items) {
            const newOrderItem = this.orderItemRespository.create()
            const menuItemId = OrderItemdata.menuItemId;

            const menuItem = await this.menuItemRespository.findOne({ where: { menuitem_id: menuItemId } })
            newOrderItem.orders = savedOrder
            newOrderItem.menuitems = menuItem
            newOrderItem.quantity = OrderItemdata.quantity
            await this.orderItemRespository.save(newOrderItem);
        }
        return newOrder;
    }

    async getOrderById(OrderId: number) {
        //   return await this.orderRespository.findOne({where: {
        //         order_id: OrderId
        //     }})
        // return await this.orderItemRespository.createQueryBuilder('oi').where('oi.orderItem_id = :id', {id: OrderId}).getMany()
        return await this.orderItemRespository.createQueryBuilder('orderitems').select(['orderitems.orderItem_id', 'orderitems.quantity']).where('orderitems.orderItem_id =:id', { id: OrderId }).getOne();
    }

    //
    async getOrderByName(Name: string) {
        const newOrder = await this.orderRespository.findOne({
            where: {
                customerName: Name
            }, relations: ['orderItems', 'orderItems.menuitems', 'orderItems.menuitems.menus']
        })
        // console.log(newOrder);



        // const newMenuItem = await this.menuItemRespository.find({where : {

        // }})

        // const newOrder = await this.orderRespository.createQueryBuilder('order').leftJoin('order.orderItems', 'orderitems').leftJoin('orderitems.menuitems', 'menuitems').where('order.customerName = :customerName').setParameter('customerName' , Name).getOne();



        const newOrderItems: orderDetails[] = newOrder.orderItems.map(item => ({
            order_Name: item.menuitems.menu_itemname,
            price: item.menuitems.price * item.quantity,
        }))

       const totalPrice = newOrderItems.reduce((accum, item) => accum+item.price, 0)

        const OrderReciept: getOrderDto = {
            order_Id: newOrder.order_id,
            customer_Name: newOrder.customerName,
            orderDetails: newOrderItems,
            totalPrice: totalPrice
        }
        return OrderReciept;
    }
    async updateOrderQuantity(updateOrder: updateOrderDto, customerName: string) {
        const newOrderid = await this.orderRespository.findOne({
            where: {
                customerName: customerName,
            }, select: { order_id: true }
        })

        const newOrderItems = await this.orderItemRespository.findOne({
            where: {
                orders: { order_id: newOrderid.order_id }, menuitems: { menu_itemname: updateOrder.menuItem }
            }
        })
        newOrderItems.quantity = updateOrder.quantity;
        const savedOrder = await this.orderItemRespository.save(newOrderItems)

        return savedOrder;

    }
    async deleteMenuItem(orderId:number,menuItemId:number){
        const newOrder = await this.orderItemRespository.delete({menuitems : {menuitem_id : menuItemId}, orders : {order_id : orderId}},)
        if(!newOrder)
       {
            throw new HttpException('Given Item is not available',HttpStatus.NO_CONTENT)
       }

        return {message : "Menu Item deleted successfully"};

    }
}


