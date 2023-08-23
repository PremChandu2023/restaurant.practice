import { IsNotEmpty, IsString } from "class-validator";


export class registerEmployeeDto {
    @IsString()
    @IsNotEmpty()
    employee_Id:string

    @IsString()
    @IsNotEmpty()
    employee_Name: string

    status:string 

    @IsString()
    @IsNotEmpty()
    email:string

    @IsString()
    @IsNotEmpty()
    password:string

    phoneNumber:number
    @IsNotEmpty()
    role: string


}