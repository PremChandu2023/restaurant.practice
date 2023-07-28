import { CanActivate, ExecutionContext } from "@nestjs/common";
import { Injectable } from "@nestjs/common/decorators";


@Injectable()
export class Bookguard implements CanActivate
{
    canActivate(context :ExecutionContext) : boolean
    {
        console.log("this is a book guard");
        
            return true;
    }
}   