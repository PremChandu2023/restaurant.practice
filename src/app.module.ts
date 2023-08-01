import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Appcontroller1 } from './app_controller';
import { Appusercontroller } from './user/user_controller'
import {user_service} from './user/user_service'
import { UserMiddleware } from './user/user_middleware';

import { DocumentBuilder,SwaggerModule } from '@nestjs/swagger';
import { BooksModule } from './books/books.module';
import { Exceptionfilters } from './user/exceptions-practice/exception-controller';
import { Usermodule } from './user/user.module';
import { Menumodule } from './restaurant-practice/Menu/menu-module';
import { Ordermodule } from './restaurant-practice/Orders/order-module';
import { Menucontroller } from './restaurant-practice/Menu/menu-controller';
import { ElectronicsModule } from './electronics/electronics-module';
import { AuthorisationMiddlware } from './restaurant-practice/middlewares/user-agent-middlewares';


@Module({
  controllers: [Appcontroller1, Appusercontroller,Exceptionfilters],
  providers : [user_service,],
  imports : [Menumodule,BooksModule,ElectronicsModule,Ordermodule]
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AuthorisationMiddlware).forRoutes("*")

  }

 }
