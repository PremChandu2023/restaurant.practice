import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { map, tap } from "rxjs/operators";
import { Observable } from "rxjs";



@Injectable()
export class RecentsearchInterceptor implements NestInterceptor {
    intercept(context: ExecutionContext, next: CallHandler<any>): Observable<any> {
        const ctx = context.switchToHttp();
        const request = ctx.getRequest<Request>();
        return next.handle().pipe(map((result) => {
            // result.message = "Thank You For Ordering"
            // result.submittedTime = `response submitted....... after  ${Date.now()}`;
            // console.log(result);
            // console.log(`response submitted....... after  ${Date.now()}`);

           const modifiedResponse = {
            succes: true,
            data : result
           }
            return modifiedResponse;

        }))
    }
}