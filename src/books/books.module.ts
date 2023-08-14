import { Get, Module } from "@nestjs/common";
import { Bookscontroller } from "./books.controller";
import { BookService } from "./books-service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Question } from "./question.entity";
import { Category } from "./category.entity";
import { UserController } from "./user-controller";
import { Users } from "./user.entities";
import { Photo } from "./Photo.entities";
import { UserService } from "./user-service";

@Module({
    controllers : [Bookscontroller, UserController],
    providers : [BookService, UserService],
    imports: [TypeOrmModule.forFeature([Question,Category,Users,Photo])]
})
export class BooksModule {


   

}