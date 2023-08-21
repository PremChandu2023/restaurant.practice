import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginEmployeeDto } from "../dtos/login.employeeDto";
import {Response} from 'express'
import { max } from "class-validator";

@Controller('auth/employee')
export class AuthController  {

    constructor(private authservice:AuthService){}

    @Post('login')
   async employeeLogin(@Body() loginBody: loginEmployeeDto, @Res() response:Response)
    {
       const {token, employee} = await this.authservice.checkLogin(loginBody);

        response.cookie('Authentication',token,{httpOnly:true, maxAge: 2*60*60*100})
        return response.send({
            success: true,
            employee
        })
    }
}