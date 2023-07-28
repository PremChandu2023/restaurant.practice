import { Injectable, NestMiddleware } from "@nestjs/common";


@Injectable()
export class UserMiddleware implements NestMiddleware
{
    use(req,res,next)
    {
        console.log("");
        console.log(req.body);
        console.log(res);
        
        next()
        
    }
}
