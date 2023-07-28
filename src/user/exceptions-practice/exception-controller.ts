import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Get, Put } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Param } from "@nestjs/common/decorators/http/route-params.decorator";
import { ApiTags } from "@nestjs/swagger";
import { BadRequestException, HttpException, HttpStatus, ParseIntPipe } from '@nestjs/common';
import { UsePipes } from "@nestjs/common/decorators/core/use-pipes.decorator";
import { UseFilters} from "@nestjs/common"
// import { idException } from "./custom-exceptions";
import { IdExceptionFilter } from "./custom-exceptions-filters";


//in nest exception filter handles the exceptions that can occurin application
// two types pf exceptions are recognized and unrecognized exceptions 
//if the exception is recognized then httpexcptions are obtained and if it is unrecognized 
// then by default internal server is obtained ==> to handle this unrecognizable exceptions we use exception filters 


@Controller("/exception")
@ApiTags("custom exceptions that can be sent ")
export class Exceptionfilters {

    @Get("/:id")
    @UsePipes()
    getId(@Param("id") id: number) {

        if (id <= 0) {
            throw new HttpException({
                error: "id should be positive",
                status: 400,
                timestamp: Date.now()

            }, HttpStatus.BAD_REQUEST)
        }
        return {
            success: "true", id
        }

    }
    @Get(":status")
    getExceptionfor(@Param("status") status: string) {
        if (status === 'author') {
            throw new BadRequestException("author should be in alphabets");

        }
    }
    
    @Get("/user/:customid")
    @UsePipes(ParseIntPipe)
   // @UseFilters(IdExceptionFilter)
    getCustomId(@Param("customid") id: number) {
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
        let c = 0;
        users.filter((user) => {
            if (user.id === id) {
                c++;
            }

        })
        if (c === 0) {
            
        }
        return "value is returned";
    }
}