import { Injectable, UnauthorizedException } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Employee } from "../Entities/employee.entity";
import { Repository } from "typeorm";
import { loginEmployeeDto } from "../dtos/login.employeeDto";
import * as bycrypt from 'bcrypt'
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {

    constructor(@InjectRepository(Employee) private employeeRespository:Repository<Employee>,
                private jwtService:JwtService){}
    async checkLogin(createLogin: loginEmployeeDto)
    {
        const employee =await this.employeeRespository.createQueryBuilder('employee').addSelect('employee.password')
        .where('employee.email = :email',{email : createLogin.email}).getOne();
        if(!employee)
        {
            throw new UnauthorizedException('Bad credentials')
        }
        else{
            //verify hashed request and password in database
          if(await  this.verifyPassword(createLogin.password, employee.password)) 
          {
                const token =await this.jwtService.signAsync({email: employee.email,
                    id: employee.id
                })
                delete employee.password;
                return {token, employee}
          }
          else{
            throw new UnauthorizedException('Bad credentials');
          }
        }      
    }
   async verifyPassword(password:string, hash:string)
    {
        return await bycrypt.compare(password,hash)
    }

}