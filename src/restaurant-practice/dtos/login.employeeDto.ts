import { IsEmpty, IsNotEmpty, IsString } from "class-validator"

export class loginEmployeeDto {

    @IsNotEmpty()
    @IsString()
    email:string

    @IsNotEmpty()   
    password:string
}