import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Users } from "./user.entities";
import { Repository } from "typeorm";
import { createPhotoDto, createUserDto } from "./books-dtos";
import { Photo } from "./Photo.entities";

@Injectable()
export class UserService {

    constructor(@InjectRepository(Users) private userRepository: Repository<Users>, @InjectRepository(Photo) private photoRepository: Repository<Photo>) { }

    createUser(createUser: createUserDto) {
        const newUser = this.userRepository.create(createUser)
        return this.userRepository.save(newUser)
    }
    async createPhoto(createPhoto: createPhotoDto, id: number) {

        const newUser = await this.userRepository.findOneBy({ user_id: id })
        const newPhoto = this.photoRepository.create(createPhoto)

        const savedPhoto = await this.photoRepository.save(newPhoto);

        newUser.photo = [savedPhoto];

        return await this.userRepository.save(newUser);
    }

}