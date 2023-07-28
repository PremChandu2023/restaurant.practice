
import { Controller } from "@nestjs/common/decorators";
import { Get } from "@nestjs/common";
import { Post } from "@nestjs/common";
import { Param } from "@nestjs/common";
import { Request } from "@nestjs/common/decorators";
import { Req } from "@nestjs/common/decorators";

//controllers handle specific requests and returns the response
//controllers receives the response
@Controller()
export class Appcontroller1 {
  
@Get("/user")    
getUser() {

    let newNumber = {ramanjanelu : 'pasupuleti',remote : 'available'}

    return newNumber;

}
// @Get('/:message')  // to give dynamically http://localhost:3000/250
// getMessage(@Param()  params : {userId : number}) {
// console.log(params.userId);

// return "message is printed";
// }


@Post("/body")
store1(@Req() req: Request)  //the request body is contained in req as an parameter type Request
{
    console.log(req.body);
    
        return Req;
}

@Get("/:dynamic")
getdynamic(@Param() inputId : number)
{
    return inputId;
}

}