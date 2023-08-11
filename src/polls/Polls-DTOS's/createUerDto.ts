import { IsIn, IsNotEmpty } from "class-validator"

export class UserDto {
    userName: string

    passWord: string
}   

export class userProfileDto {
    id: number
    age: number
    firstName: string
    lastName: string
    Address: string
    dob: string
}

export class userPostDto {
    @IsNotEmpty({ message: "title should not be empty" })
    title: string

    description: string
}

export class createPollDto {

    Question:string;

    Options: string;
}
export class createOptionDto {
    text:string

}

