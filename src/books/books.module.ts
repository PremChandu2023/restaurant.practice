import { Get, Module } from "@nestjs/common";
import { Bookscontroller } from "./books.controller";
//import { Bookservice } from "./books.service";

@Module({
    controllers : [Bookscontroller],
    //providers : [Bookservice]
})
export class BooksModule {


   

}