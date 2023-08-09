import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { ExceptionController } from "./exception-controller";
import { AuthorisationMiddlware, Useragent } from "src/restaurant-practice/middlewares/user-agent-middlewares";

@Module({

    controllers: [ExceptionController],
})
export class ExceptionModule implements NestModule {
    configure(consumer: MiddlewareConsumer)
    {
        consumer.apply(AuthorisationMiddlware).forRoutes(ExceptionController)
    }

}