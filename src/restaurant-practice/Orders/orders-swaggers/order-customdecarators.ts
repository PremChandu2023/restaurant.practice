import { applyDecorators } from "@nestjs/common";
import { ApiBadRequestResponse, ApiForbiddenResponse, ApiNotFoundResponse, ApiOkResponse, ApiUnauthorizedResponse } from "@nestjs/swagger";
import { OrderApiResponse } from "./orders.swaggers.api";
import { BookCustomDecorator } from "src/books/custom-decarators";
import { bookExamples } from "src/books/books-swagger-examples";
import { ApiResponses } from "src/books/books-responses";

export function OrderCustomdecator (method: string, route:string)
{
    switch(method){
        case 'Post':
            switch(route) {
                case '/':
                    return applyDecorators(
                        ApiOkResponse(OrderApiResponse.post.created),
                    )
         }
         case 'Get':
            switch(route) {
                case '/:id':
                    return applyDecorators(
                        ApiOkResponse(OrderApiResponse.get.ok),
                        ApiNotFoundResponse(OrderApiResponse.get.notFound),
                        ApiUnauthorizedResponse(ApiResponses.get.unauthorized),
                        ApiForbiddenResponse(ApiResponses.get.forbidden)
                    )
                case '/byname/:name':
                return applyDecorators(ApiOkResponse(OrderApiResponse.get.ok),
                ApiNotFoundResponse(OrderApiResponse.get.notFound),
                ApiUnauthorizedResponse(ApiResponses.get.unauthorized),
                ApiForbiddenResponse(ApiResponses.get.forbidden))

            }
            case 'Put':
                switch(route) {
                    case '/itemquantity:name':
                    return applyDecorators(ApiOkResponse(OrderApiResponse.put.ok),
                    ApiNotFoundResponse(OrderApiResponse.put.NotFound),
                    ApiUnauthorizedResponse(ApiResponses.get.unauthorized),
                    ApiForbiddenResponse(ApiResponses.get.forbidden))
                    case '/:id/addItem':
                    return applyDecorators(ApiOkResponse(OrderApiResponse.put.addMenUitem.ok),
                    ApiBadRequestResponse(OrderApiResponse.put.addMenUitem.BadRequest),
                    ApiUnauthorizedResponse(ApiResponses.get.unauthorized),
                    ApiForbiddenResponse(ApiResponses.get.forbidden))
                }
    }
}