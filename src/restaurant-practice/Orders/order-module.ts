import { Module } from "@nestjs/common";
import { OrderServices } from "./order-service";
import { OrderController } from "./order-controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Menu } from "./orders.entities/menu.entity";
import { Order } from "./orders.entities/orders.entity";
import { MenuItems } from "./orders.entities/menuitem.entity";
import { OrderItem } from "./orders.entities/orderitem.entity";
import { Employee } from "../Entities/employee.entity";
import { Roles } from "../Entities/roles.entities";
import { EmployeeAuthGuard } from "../Auth/auth.Guard";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { RolesGuard } from "../guards/rolebased.guard";

@Module({

controllers : [OrderController],
imports: [TypeOrmModule.forFeature([Menu,Order,MenuItems,OrderItem, Employee, Roles]),JwtModule.register({
    secret: 'employeesecret',
    signOptions : {algorithm : 'HS512',
    expiresIn : '1d'
                }
}),PassportModule.register({defaultStrategy : 'jwt'})],
providers : [OrderServices,EmployeeAuthGuard,RolesGuard],

})
export class Ordermodule {}