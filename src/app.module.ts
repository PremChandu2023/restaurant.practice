import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { Appcontroller1 } from './app_controller';
import { Appusercontroller } from './user/user_controller'
import {user_service} from './user/user_service'
import { UserMiddleware } from './user/user_middleware';

import { BooksModule } from './books/books.module';
import { Menumodule } from './restaurant-practice/Menu/menu-module';
import { Ordermodule } from './restaurant-practice/Orders/order-module';
import { ElectronicsModule } from './electronics/electronics-module';
import { ExceptionModule } from './restaurant-practice/exceptions-practice/exceptions-module';
import { AuthorisationMiddlware } from './restaurant-practice/middlewares/user-agent-middlewares';
import { RecentsearchInterceptor } from './restaurant-practice/interceptors/interceptor-menu';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './polls/database-type-orm/Entities/User';
import { PollsModule } from './polls/polls.module';

import { book_database, restaurentdatabase} from './polls/database.config';



@Module({
  controllers: [Appcontroller1, Appusercontroller],
  providers : [user_service,RecentsearchInterceptor],
  imports : [TypeOrmModule.forRoot(restaurentdatabase), Menumodule,BooksModule,ElectronicsModule,Ordermodule,ExceptionModule,PollsModule
            ]
})
export class AppModule implements NestModule {

  configure(consumer: MiddlewareConsumer) {
   // consumer.apply(AuthorisationMiddlware).forRoutes("*")

  }

 }
