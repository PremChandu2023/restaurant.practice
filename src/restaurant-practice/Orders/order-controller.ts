import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";


@Controller('/Order')
@ApiTags("Orders")
export class OrderController {


    @Post('/:orderid')
    createOrder(@Param('id') id:number, @Body() orderdata)
    {
        return  ;
    }

    @Get("/name")
    getOrders()
    {
        return "shbdahbshb"
    }
}