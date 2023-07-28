import { Module } from "@nestjs/common";
import { Orderservice } from "./order-service";
import { OrderController } from "./order-controller";
import { Menumodule } from "../Menu/menu-module";

@Module({

controllers : [OrderController],
providers : [Orderservice],
imports : [Menumodule]

})
export class Ordermodule {}