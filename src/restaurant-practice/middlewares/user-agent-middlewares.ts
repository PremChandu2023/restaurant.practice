import { BadGatewayException, BadRequestException, ForbiddenException, HttpStatus, Injectable, NestMiddleware, UnauthorizedException } from "@nestjs/common";
import { ApiBadGatewayResponse } from "@nestjs/swagger";
import { NextFunction, Request, Response } from "express";
import { IdAuthorization } from "src/restaurant-practice/exceptions-practice/custom-exceptions";
import { IdAuthorizationFilter } from "src/restaurant-practice/exceptions-practice/custom-exceptions-filters";


export async function userAgent(req: Request, res: Response, next: NextFunction) {
    const ua = await req.headers["user-agent"];

    console.log("this is middle ware for menu");

    // throw new BadRequestException();

    req["ua"] = ua;

    res.json({ message: "success", ua })
}


@Injectable()
export class Useragent implements NestMiddleware {

    use(req: Request, res: Response, next: NextFunction) {
        const ua = req.headers["user-agent"];
        if (!(ua === 'PostmanRuntime/7.32.3')) {
            res.json({ message: "this is protected request" })
            next();

        }
        throw new ForbiddenException("not allowed");
    }
}

function verifyToken(token: string) {
    if (token === 'chandu') {
        return true;
    }
    return false
}
@Injectable()
export class AuthorisationMiddlware implements NestMiddleware {
    use(req: Request, res: Response, next: NextFunction) {

        const token = req.headers.authorization?.split(' ')[1];
        // console.log(token);
        if (verifyToken(token)) {
            next();
            return;
        }
        res.status(HttpStatus.UNAUTHORIZED).json({
            message: "Given request does not permisions or Token is not valid",
            error: "UNAUTHORIZED"
        });
    }

}

