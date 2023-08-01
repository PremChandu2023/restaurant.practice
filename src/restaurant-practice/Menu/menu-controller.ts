import { Body, Controller, Get, Post, Put, Req } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";


@ApiTags("Menu")
@Controller('menu')
export class Menucontroller {

@Get('id')
getMenu(@Req() req : Request)
{
    console.log(req["ua"]);
    return{ success : true, message : "this is the list of menu"}  
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