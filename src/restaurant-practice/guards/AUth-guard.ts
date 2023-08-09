import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { Observable } from "rxjs";


@Injectable()
export class AuthGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
        const conte =  context.switchToHttp();
        let request = conte.getRequest();
        console.log(request.authorization);
        
        return true;
    }
}
