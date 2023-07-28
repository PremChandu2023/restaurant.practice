import { Controller } from "@nestjs/common";
import { Get } from "@nestjs/common";
import { user_service } from "./user_service";
import { ApiQuery, ApiTags } from "@nestjs/swagger";
import { Body, Param, Post, Query, UseGuards, UsePipes } from "@nestjs/common/decorators";
import { DefaultValuePipe, ParseArrayPipe, ParseFilePipe, ParseIntPipe, ParseUUIDPipe, } from "@nestjs/common/pipes";

import { HttpStatus } from "@nestjs/common/enums";
import { v4 as uuidv4 } from 'uuid';
import { Custompipes } from "./custom-pipes";
import { Bookguard } from "./Guards-in-nest/gaurd-1";
import { Userstore } from "./user-store";



class uuid {
    getuuid ()
    {
        const myUuid = uuidv4();
        console.log(myUuid);

    }
}

@Controller("/users")
@ApiTags("User pipes practice")
export class Appusercontroller {

    @Get('/:id')
    @UsePipes(ParseIntPipe,ParseFilePipe)
    getPipesuse(@Param("id", new DefaultValuePipe(0),ParseIntPipe) id: number) {

        // let myuuid = new uuid().getuuid();
        // console.log(myuuid);
        
        const users = [
            {
                id: 1,
                username: 'john_doe',
                email: 'john@example.com',
                age: 30,
                isAdmin: false
            },
            {
                id: 2,
                username: 'jane_smith',
                email: 'jane@example.com',
                age: 28,
                isAdmin: true
            },
            {
                id: 3,
                username: 'alex_johnson',
                email: 'alex@example.com',
                age: 25,
                isAdmin: false
            },
            {
                id: 4,
                username: 'mike_brown',
            }
        ]
        const user = users.filter((user) => {
            if (user.id === id) {
                return user;
            }
        })
        return user;
    }
    @Get(":uuid")
    getUUId(@Param("uuid" , new ParseUUIDPipe({ version : "4", errorHttpStatusCode: HttpStatus. NOT_ACCEPTABLE})) uuidno)
    {
        console.log(uuidno);
        return uuidno;
        
    }

    @Get("/search/:searchid")
    // @ApiQuery({ name: 'search', description: 'values with divided with coma' })
    @UseGuards(new Bookguard())
    @UsePipes(new Custompipes())
    searchById(@Param('search') id :number)
    {
       
        const users = [
            {
                id: 1,
                username: 'john_doe',
                email: 'john@example.com',
                age: 30,
                isAdmin: false
            },
            {
                id: 2,
                username: 'jane_smith',
                email: 'jane@example.com',
                age: 28,
                isAdmin: true
            },
            {
                id: 3,
                username: 'alex_johnson',
                email: 'alex@example.com',
                age: 25,
                isAdmin: false
            },
            {
                id: 4,
                username: 'mike_brown',
            }
        ]



        return users;
    }

}


function getMessage() {
    throw new Error("Function not implemented.");
}

