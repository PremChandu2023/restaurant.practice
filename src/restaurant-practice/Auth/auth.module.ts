import { Module } from "@nestjs/common";
import { AuthController } from "./auth.controller";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Employee } from "../Entities/employee.entity";
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";

@Module({
controllers: [AuthController],
imports : [TypeOrmModule.forFeature([Employee]),
            JwtModule.register({
                secret: 'employeesecret',
                signOptions : {algorithm : 'HS512',
                expiresIn : '1d'
                            }
            }),PassportModule.register({defaultStrategy : 'jwt'})]
})
export class AuthModule {

}