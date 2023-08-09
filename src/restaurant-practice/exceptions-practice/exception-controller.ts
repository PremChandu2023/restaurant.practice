import { Controller } from "@nestjs/common/decorators/core/controller.decorator";
import { Get, Put, Post, Delete } from "@nestjs/common/decorators/http/request-mapping.decorator";
import { Body, Param, Query, Res } from "@nestjs/common/decorators/http/route-params.decorator";
import { ApiBody, ApiTags } from "@nestjs/swagger";
import { BadRequestException, HttpException, HttpStatus, ParseIntPipe, ValidationPipe } from '@nestjs/common';
import { UsePipes } from "@nestjs/common/decorators/core/use-pipes.decorator";
import { UseFilters } from "@nestjs/common"
import { IdConflictExceptionFilter, IdNotFoundExceptionFilter } from "./custom-exceptions-filters";
import { olympicsItems } from "./country-service";
import { IdConflictException, IdNotFoundException } from "./custom-exceptions";
import { OlympicMedalDto, QueryDto } from "./exception-dto";



//in nest exception filter handles the exceptions that can occurin application
// two types pf exceptions are recognized and unrecognized exceptions 
//if the exception is recognized then httpexceptions are obtained and if it is unrecognized 
// then by default internal server is obtained ==> to handle this unrecognizable exceptions we use exception filters 


@Controller("/exception")
@UseFilters(IdNotFoundExceptionFilter, IdConflictExceptionFilter)
@ApiTags("custom exceptions  can be sent ")
export class ExceptionController {

    @Get("/:id")
    @UsePipes(ParseIntPipe)
    getId(@Param("id") givenId: number, @Res() response) {
        //standard exceptions
        if (givenId < 0) {
            throw new HttpException({
                error: "Id should be greater than 0",
                status: 400,
                timestamp: new Date().toISOString()

            }, HttpStatus.BAD_REQUEST)
        }
        let c = 0;
        let data = olympicsItems.filter(value => {
            if (givenId === value.id) {
                c++;
                return value;
            }
        })
        if (c === 0) {
            //customexceptionfilter
            throw new IdNotFoundException();
        }
        response.status(200).send({
            message: "This is the details for specific id",
            output: data

        })
    }
    @Get(":status")
    getExceptionfor(@Param("status") status: string) {
        if (status === 'author') {
            throw new BadRequestException("author should be in alphabets");

        }
    }
    @Post('/:id')
    @ApiBody({ description: "body should be in the format of country" })
    @UsePipes(new ValidationPipe())
    createMemberId(@Res() res, @Body() body: OlympicMedalDto) {
        let data = olympicsItems.map((value) => {
            if (value.id === body.id) {
                throw new IdConflictException()
            }
        })
        olympicsItems.push(body)
        return res.status(210).send({
            message: "File is created succefully",
            output: body

        })
    }
    @Delete('/delete')
    deleteMember(@Query(ValidationPipe) query: QueryDto, @Res() response) {
        const { sport, played } = query
        const output = deleteRequest(sport, played)
        if (output.length === 0) {
            throw new IdNotFoundException();
        }
        return response.status(200).send({
            message: "Olympics objects has been deleted with given query parameters",
            Olympics: output
        })
    }
    @Put('/:id')
    updateMember(@Param('id', ParseIntPipe) id, @Body() body: OlympicMedalDto) {
        let data = updateRequest(body, id)
        return data;
    }
}

function deleteRequest(sport: string, played: string) {
    const conditionToDelete = (item) =>
        item.sport.sportName.toLowerCase() === sport && item.sport.playedBy.toLowerCase() === played
    const updatedOlympicsItems = olympicsItems.filter((item) => conditionToDelete(item));
    return updatedOlympicsItems;

}
function updateRequest(body: OlympicMedalDto, id: number) {
    let newdOlympic = olympicsItems.filter((value) => {
        return (value.id === id)}
        
    )
     newdOlympic.push()
}



