import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";



@Injectable()
export class RecentsearchInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest();
        // console.log(request.query);
        return next.handle().pipe(map((result) => {
            result.success = false;
            console.log(result);
            console.log(`response submitted....... after  ${Date.now()}`);

        }))
    }
}