import { Body, Controller, Injectable, Param, ParseIntPipe, Post } from "@nestjs/common";
import { createPhotoDto, createUserDto } from "./books-dtos";
import { UserService } from "./user-service";


@Controller('usersof')
export class UserController {

    constructor(private userservice:UserService){}

    @Post('/')
  createQuestion(@Body() createUser: createUserDto) {    
    return this.userservice.createUser(createUser);
  }

  @Post(':id/postphoto')
  createPhoto(@Body() createQuestion: createPhotoDto,@Param('id',ParseIntPipe) id:number) {
    
    return this.userservice.createPhoto(createQuestion,id);
  }

}