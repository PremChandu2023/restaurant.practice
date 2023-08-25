import { applyDecorators } from "@nestjs/common";
import { ApiBadRequestResponse, ApiOkResponse } from "@nestjs/swagger";
import { MenuResponses } from "./swagger-resposnes-menu";


export function MenuCustomdecarators(method:string,route:string)
{
    switch(method){
        case 'Get':
            switch(route)
            {
                case '/':
                    return applyDecorators(
                        ApiOkResponse(MenuResponses.get.ok)
                    )
                case '/:id':
                    return applyDecorators(
                        ApiOkResponse(MenuResponses.getById.ok),
                        ApiBadRequestResponse(MenuResponses.getById.Badrequest)
                    )
            }
        case 'Post':
            switch(route)
            {
                case '/':
                    return applyDecorators()
                case ':id/menuitem':
                    return applyDecorators(
                        ApiOkResponse(MenuResponses.addMenuItem.ok),
                        ApiBadRequestResponse(MenuResponses.addMenuItem.BadRequest)
                    )

            }
        case 'Delete':
            switch(route)
            {
                case '/':
                    return applyDecorators()
            }

    }
}