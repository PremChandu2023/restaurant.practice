import { Get, Module } from "@nestjs/common";
import { ElectronicsController } from "./electronics-controller";
@Module({
    controllers : [ElectronicsController],
})
export class ElectronicsModule {


   

}