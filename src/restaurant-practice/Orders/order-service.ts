import { Injectable } from "@nestjs/common";
import { Menuservice } from "../Menu/menu-service";
import { Tablemenu } from "../Menu/table-menu";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Menu } from "./orders.entities/menu.entity";
import { MenuItems } from "./orders.entities/menuitem.entity";
import { Order } from "./orders.entities/orders.entity";
import { OrderItem } from "./orders.entities/orderitem.entity";
import { MenuDto, MenuItemDto, createOrderDTo, updateOrderDto } from "./orders.dtos";


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
        newOrder.customerName=createOrder.customerName;
     const savedOrder=   await this.orderRespository.save(newOrder);
            for(const OrderItemdata of createOrder.items)
            {
            const newOrderItem =  this.orderItemRespository.create()
            const menuItemId = OrderItemdata.menuItemId;
           
            const menuItem = await this.menuItemRespository.findOne({where : {menuitem_id: menuItemId}})
            newOrderItem.orders=savedOrder
                newOrderItem.menuitems=menuItem
                newOrderItem.quantity=OrderItemdata.quantity
                await this.orderItemRespository.save(newOrderItem);
            }
        return newOrder;
    }

    async getOrderById(OrderId?:number)
    {
      return await this.orderRespository.findOne({where: {
            order_id: OrderId
        }})
    }

    //
    async getOrderByName( OrderName:string )
    {
       return await this.orderRespository.find({where: {
            customerName: OrderName
        }, relations: {
            orderItems: true
        }})
    }
    async updateOrderQuantity(updateOrder:updateOrderDto, customerName:string)
    {
        const order = await this.orderRespository.findOne({where : {
            customerName : customerName, orderItems : {
                menuitems : {menu_itemname : updateOrder.menuItem}
            }
        }, select: {
            order_id: true
        }})
        console.log(order);
        
        const updateOrderItem = await this.orderItemRespository.find({where : {
            quantity: updateOrder.quantity,orderItem_id : order.order_id
        }})
        console.log(updateOrderItem);
        
        return updateOrderItem;
    }
    }


