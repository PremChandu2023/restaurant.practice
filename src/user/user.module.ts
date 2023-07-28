import { Module } from "@nestjs/common";
import { AppModule } from "src/app.module";
import { Appcontroller1 } from "src/app_controller";
import { Userstore } from "./user-store";
import { Appusercontroller } from "./user_controller";
import { UserstoreController } from "./user-store-controller";
import { Userservice } from "./user-service";

@Module({
    controllers : [Appusercontroller,UserstoreController],
    providers : [{provide : Userstore, useClass : Userstore},Userstore, Userservice] // Userstore will be injection token of Userstore class
})
export class Usermodule {

  
}