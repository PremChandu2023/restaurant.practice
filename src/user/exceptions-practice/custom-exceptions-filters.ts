import { idException } from "./custom-exceptions";
import { Catch, ExceptionFilter, ArgumentsHost } from "@nestjs/common"


@Catch(idException)
export class IdExceptionFilter implements ExceptionFilter {
    catch(exception: any, host: ArgumentsHost) {
        const body = {
            message: exception.message,
            error: "Id error"
        }
        const cx = host.switchToHttp();
        const response = cx.getResponse<Response>();
    }




}