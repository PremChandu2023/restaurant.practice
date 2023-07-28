import { BadGatewayException, BadRequestException, ForbiddenException, HttpStatus, Injectable, NestMiddleware } from "@nestjs/common";
import { ApiBadGatewayResponse } from "@nestjs/swagger";
import { NextFunction,Request,Response } from "express";


export function userAgent(req  : Request, res: Response, next :NextFunction )
{
    const ua = req.headers["user-agent"];

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
            return res.json({message : "this is protecetd request"})
            next();
            
        }
        throw new ForbiddenException("not allowed");
    }
}

