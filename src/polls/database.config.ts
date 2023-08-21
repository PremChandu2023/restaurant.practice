import { TypeOrmModule, TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "./database-type-orm/Entities/User";
import { Profile } from "./database-type-orm/Entities/Profile";
import { Posts } from "./database-type-orm/Entities/Post.entity";
import { Polls } from "./database-type-orm/Entities/Polls.entity";
import { Question } from "src/books/question.entity";
import { Category } from "src/books/category.entity";
import { Users } from "src/books/user.entities";
import { Photo } from "src/books/Photo.entities";
import { Votes } from "./database-type-orm/Entities/Vote.entity";
import { Menu } from "src/restaurant-practice/Orders/orders.entities/menu.entity";
import { MenuItems } from "src/restaurant-practice/Orders/orders.entities/menuitem.entity";
import { Order } from "src/restaurant-practice/Orders/orders.entities/orders.entity";
import { OrderItem } from "src/restaurant-practice/Orders/orders.entities/orderitem.entity";
import { Option } from "./database-type-orm/Entities/Options.entity";
import { Employee } from "src/restaurant-practice/Entities/employee.entity";
import { Roles } from "src/restaurant-practice/Orders/orders.entities/employee.entites";

export const restaurentdatabase : TypeOrmModuleOptions  = 
 {
        type : 'mysql',
        host : 'localhost',
        port : 3306,
        username: 'root',
        password : 'root123',
        database:'restaurent',
        entities: [Menu, MenuItems, Order,OrderItem, Employee, Roles],
        synchronize: true,
        // migrationsRun: false

}

export const book_database : TypeOrmModuleOptions = {
    type : 'mysql',
    host : 'localhost',
    port : 3306,
    username: 'root',
    password : 'root123',
    database:'book_database',
    entities: [User,Profile, Posts,Polls,Votes,Option,Question,Category,Users, Photo],
    synchronize: true,
    // migrationsRun: false
  }