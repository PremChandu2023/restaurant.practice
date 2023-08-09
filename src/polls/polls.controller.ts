import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Res } from "@nestjs/common";

import { UserDto } from "./Polls-DTOS's/createUerDto";
import { PollsService } from "./polls.service";

@Controller('/Polls')
export class PollsController  {
    constructor(private userService:PollsService){}
    @Get()
  async  getUserDetails()
    {
        const users = await this.userService.findUsers();
         return users;
       
    }

    @Post('/create')
  async addUser(@Body() user:UserDto, @Res() response)
    {   
       await this.userService.createUser(user);
    }

    @Put(':id')
    async updateUser(@Param('id', ParseIntPipe) id:number, @Body() updateUser: UserDto ){
           return this.userService.updateUser(id,updateUser)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id:number)
    {
        this.userService.deleteUserById(id);
    }

}