import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { Menucontroller } from "./menu-controller";
import { AuthorisationMiddlware, Useragent, userAgent } from "../middlewares/user-agent-middlewares";
import { MenuService } from "./menu-service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Menu } from "../Orders/orders.entities/menu.entity";
import { MenuItems } from "../Orders/orders.entities/menuitem.entity";

@Module({

controllers : [Menucontroller],
imports: [TypeOrmModule.forFeature([Menu,MenuItems])],
providers : [MenuService]
})
export class Menumodule  {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //     .apply(Useragent)
    //     .exclude({path: "menu/id" , method : RequestMethod.POST},{path: "menu/id" , method : RequestMethod.ALL})
    //     .forRoutes();
    // }

}