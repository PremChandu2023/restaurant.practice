import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, Res } from "@nestjs/common";

import { UserDto, createOptionDto, createPollDto, userPostDto, userProfileDto } from "./Polls-DTOS's/createUerDto";
import { PollsService } from "./polls.service";
import { ApiTags } from "@nestjs/swagger";

@ApiTags('Polls')
@Controller('/polls')
export class PollsController  {
    constructor(private userService:PollsService){}

//polls, options--->
   @Post()
   createPoll(@Body() createPoll: createPollDto)
   {
       return  this.userService.createPoll(createPoll)
   }
   
   @Post(':id/option')
   addOptions(@Body() addOption: createOptionDto, @Param('id',ParseIntPipe) id:number){
        return this.userService.addOption(id,addOption);
   }

   @Get('/options')
   getAllOptions()
   {
       return  this.userService.getOptions();
   }

   @Get('/options/:id')
   getOptions(@Param('id', ParseIntPipe) id:number)
   {
       return  this.userService.getOptions(id);
   }

   @Get('all')
   getAllPolls()
   {
       return this.userService.getAllPolls();
   }

   @Get('/:id')
   getPollsById(@Param('id', ParseIntPipe) id:number)
   {
       return this.userService.getAllPolls(id);
   }






//---> users, posts
    @Get('/id')
    getUserDetails()
    {
      
        const users = this.userService.findAllUsers();
         return users;
       
    }

    @Post('/user')
    addUser(@Body() user:UserDto)
    {   
       return this.userService.createUser(user);
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

    @Post(':id/profile')
    addUserProfile(@Param('id',ParseIntPipe) id:number, @Body() userProfileDto: userProfileDto)
    {
       return this.userService.createUserProfile(id,userProfileDto);
    }

    @Post(':id/post')
    addUserPost(@Param('id', ParseIntPipe) id:number,@Body() userPost:userPostDto){
       return  this.userService.createUserPost(id, userPost);

    }



}