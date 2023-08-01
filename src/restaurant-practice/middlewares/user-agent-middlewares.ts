import { BadGatewayException, BadRequestException, ForbiddenException, HttpStatus, Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { ApiBadGatewayResponse } from "@nestjs/swagger";
import { NextFunction,Request,Response } from "express";


export  async function userAgent(req  : Request, res: Response, next :NextFunction )
{
    const ua = await req.headers["user-agent"];

    console.log("this is middle ware for menu");

    // throw new BadRequestException();
    
    req["ua"] = ua;

   res.json({message : "success", ua})
}


@Injectable()
export class Useragent implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
const ua = req.headers["user-agent"];
        if(!(ua === 'PostmanRuntime/7.32.3'))
        {
            res.json({message : "this is protected request"})
            next();
            
        }
        throw new ForbiddenException("not allowed");
    }
}

function verifyToken(token : string)
{
        return true;
}

export class AuthorisationMiddlware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction){
        
       const token =  req.headers.authorization?.split(' ')[1];

        if(verifyToken(token))
        {
            console.log(token+"****************************");
            
            next();
            return;
        }
         throw new UnauthorizedException();

    }

}

