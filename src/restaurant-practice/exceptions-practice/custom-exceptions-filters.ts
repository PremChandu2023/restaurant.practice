import { IdAuthorization, IdConflictException, IdNotFoundException, idException } from "./custom-exceptions";
import { Catch, ExceptionFilter, ArgumentsHost, HttpException, NotFoundException, HttpStatus } from "@nestjs/common"
import { Response } from "express";


@Catch(IdAuthorization)
export class IdAuthorizationFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const body = {
            message: exception.message,
            error: "UNAUTHORIZED"
        }
        const cx = host.switchToHttp();
        const response = cx.getResponse<Response>();
        // const request = cx.getRequest<Request>();
        return  response.status(HttpStatus.UNAUTHORIZED).json(body);
    }
}

@Catch(IdConflictException)
export class IdConflictExceptionFilter implements ExceptionFilter {
    catch(exception: IdConflictException, host: ArgumentsHost) {
        const body = {
            message : exception.message,
            error : "CONFLICT_ERROR"
        }
        const cx =host.switchToHttp();
        const response = cx.getResponse<Response>();
        return response.status(HttpStatus.CONFLICT).json(body)
    }

}
@Catch(IdNotFoundException)
export class IdNotFoundExceptionFilter implements ExceptionFilter {
    catch(exception: IdNotFoundException, host: ArgumentsHost) {
        const body = {
            message: exception.message,
            error:
            {
                "code": "NOT_FOUND",
                "message": "Resource with the specified ID not found.",
                "details": "The requested resource could not be found based on the provided ID."
            }

        }
        const cy = host.switchToHttp();
        const response = cy.getResponse<Response>();
        response.status(HttpStatus.NOT_FOUND).json(body);
    }
}




