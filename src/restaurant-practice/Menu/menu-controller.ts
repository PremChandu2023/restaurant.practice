import { Body, Controller, Get, Param, Post, Put, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { AuthGuard } from "../guards/AUth-guard";
import { RecentsearchInterceptor } from "../interceptors/interceptor-menu";
import { CustomBook } from "../custom-decarators/custom-decarrators-Books";


@ApiTags("Menu")
@Controller('menu')
export class Menucontroller {

@Get(':id')
// @UseGuards(AuthGuard)
@UseInterceptors(RecentsearchInterceptor)
getMenu(@Param('id') id:number, @Req() req : Request)
{
    return   { success : true, message : `this is the list of menu`}  
}

@Post('id')
addMenu() {
    return { success : true, message : "Menun is added "};
}

@Put('id')
updateMenu() {
    return {success :true, message : "menu has been updated "}
}


}