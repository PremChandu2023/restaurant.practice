import { Controller, Delete, Get, Param, ParseIntPipe, Query } from "@nestjs/common";
import { UserServices } from "./user-data-service";
import { ApiTags } from "@nestjs/swagger";
import { count } from "console";

@ApiTags('Usesdata')
@Controller('Userdata')
export class UserControllers  {
    constructor(private userServices:UserServices){}

    @Get('allusers')
    getAllUsers()
    {
        console.log('jhdjhagdg');
        
       return this.userServices.getAllUsers();
    }
    
    @Get('allusers/:count')
    getAllUsersCount(@Param('count', ParseIntPipe) count:number)
    {       
       return this.userServices.getAllUsers(count);
    }

    @Get('/names')
    getbyNames(@Query('firstName') firstName:string, @Query('lastName') secondName:string){
       return  this.userServices.getByfirstlastname(firstName,secondName);
    }

    @Get('allusersbycondi/:count')
    getAllUsersBycondition(@Param('count', ParseIntPipe) count:number)
    {       
       return this.userServices.getAllUserByCondition(count);
    }

    


}
