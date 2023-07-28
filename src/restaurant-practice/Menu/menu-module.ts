import { Global, MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { Menucontroller } from "./menu-controller";
import { Menuservice } from "./menu-service";
import { Ordermodule } from "../Orders/order-module";
import { Orderservice } from "../Orders/order-service";
import { Useragent, userAgent } from "../middlewares/user-agent-middlewares";

@Module({

controllers : [Menucontroller],
})
export class Menumodule implements NestModule {
    configure(consumer: MiddlewareConsumer) {
        consumer.apply(Useragent).forRoutes("menu");
    }

}