import { Global, MiddlewareConsumer, Module, NestModule, RequestMethod } from "@nestjs/common";
import { Menucontroller } from "./menu-controller";
import { Menuservice } from "./menu-service";
import { Ordermodule } from "../Orders/order-module";
import { AuthorisationMiddlware, Useragent, userAgent } from "../middlewares/user-agent-middlewares";

@Module({

controllers : [Menucontroller],
})
export class Menumodule  {
    // configure(consumer: MiddlewareConsumer) {
    //     consumer
    //     .apply(Useragent)
    //     .exclude({path: "menu/id" , method : RequestMethod.POST},{path: "menu/id" , method : RequestMethod.ALL})
    //     .forRoutes();
    // }

}