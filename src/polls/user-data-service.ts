import { InjectRepository } from "@nestjs/typeorm";
import { LessThan, Like, MoreThan, Repository } from "typeorm";
import { User } from "./database-type-orm/Entities/User";
import { Injectable } from "@nestjs/common";

@Injectable()
export class UserServices {
    constructor(@InjectRepository(User) private userRespository: Repository<User>){}

   async getByfirstlastname(firstName:string,secondName:string)
    {
        return await this.userRespository.find({where: {
           userFirstName: firstName,
           userLastName:secondName
        },select: {
            userFirstName:true,
            userLastName:true,
            userIncome:true
        }})
    }

    //take: 1:
// This option specifies the maximum number of rows to retrieve. In this case, you're limiting the query to return only one row.

// skip: 1:
// This option specifies the number of rows to skip before starting to retrieve rows. In this case, you're skipping one row, effectively starting the retrieval from the second row (zero-based index).
    async getAllUsers(count?:number)
    {       
        if(count)
        {
            return this.userRespository.find({ order: {
                userIncome:"DESC"
            }, take:1,skip:count-1 })
        }
        return await this.userRespository.find({select : {id:true, userFirstName:true, userLastName:true,
        userIncome:true}, order: {id: "DESC",userIncome: "DESC"}})
    }
    async getAllUserByCondition(count?:number)
    {       
        return await this.userRespository.find({select : {id:true, userFirstName:true, userLastName:true,
        userIncome:true}, where: {userIncome: MoreThan(count),userLastName: Like("%re%")}})
    }
}