import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { Menucontroller } from "./menu-controller";
import { Menuservice } from "./menu-service";
import { Ordermodule } from "../Orders/order-module";
import { Orderservice } from "../Orders/order-service";
import { AuthorisationMiddlware, Useragent, userAgent } from "../middlewares/user-agent-middlewares";

@Module({

controllers : [Menucontroller],
})
export class Menumodule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer
        .apply(Useragent)
        .exclude({path: "menu/id" , method : RequestMethod.POST})
        .forRoutes(Menucontroller);
    }

}