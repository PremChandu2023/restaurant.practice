import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { User } from "./database-type-orm/Entities/User";
import { UserDto } from "./Polls-DTOS's/createUerDto";

@Injectable()
export class PollsService {
    constructor(@InjectRepository(User)  private userRespository: Repository<User>){}

   findUsers()
    {
       return this.userRespository.find();
    }

   async createUser(createUser: UserDto) {       
       
        const newUser = this.userRespository.create({...createUser,createdAt: new Date()})
          return await this.userRespository.save(newUser);
    }

    async updateUser(id : number,updateUser:UserDto)
    {
       return this.userRespository.update({id}, {...updateUser})
    }

    async deleteUserById(id : number)
    {
        return this.userRespository.delete({id})
    }
    
}