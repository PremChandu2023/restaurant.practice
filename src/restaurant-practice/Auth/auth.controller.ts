import { Body, Controller, Post, Res } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { loginEmployeeDto } from "../dtos/login.employeeDto";
import {Response} from 'express'

@Controller('auth/employee')
export class AuthController  {

    constructor(private authservice:AuthService){}

    @Post('login')
    employeeLogin(@Body() loginBody: loginEmployeeDto, @Res() resposne:Response)
    {
        return this.authservice.checkLogin(loginBody)
    }


}