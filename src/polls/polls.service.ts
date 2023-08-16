import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { DataSource, Repository } from "typeorm";
import { User } from "./database-type-orm/Entities/User";
import { UserDto, createOptionDto, createPollDto, userProfileDto } from "./Polls-DTOS's/createUerDto";
import { Profile } from "./database-type-orm/Entities/Profile";
import { CreateUserPostparams } from "./polls-types/polls-types";
import { Posts } from "./database-type-orm/Entities/Post.entity";
import { Polls } from "./database-type-orm/Entities/Polls.entity";
import { Option } from "./database-type-orm/Entities/Options.entity";

@Injectable()
export class PollsService {
    constructor(@InjectRepository(User) private userRespository: Repository<User>, @InjectRepository(Profile) private profileRepository: Repository<Profile>, @InjectRepository(Posts) private postsRepository: Repository<Posts>, @InjectRepository(Polls) private pollRespository: Repository<Polls>, @InjectRepository(Option) private OptionRespository: Repository<Option>) { }





    createPoll(createPoll: createPollDto) {
        const newPoll = this.pollRespository.create(createPoll);

        return this.pollRespository.save(newPoll)

    }

    async getOptions(id?: number) {
        if (!id) {
            return await this.OptionRespository.find();
        }
        return await this.OptionRespository.findOneBy({ id })
    }

    async addOption(id: number, addOption: createOptionDto) {
        const newPoll = await this.pollRespository.findOne({ where: { id } })
        if (!newPoll) {
            throw new HttpException('Given poll id not found', HttpStatus.BAD_REQUEST);
        }
        const newOption = this.OptionRespository.create({ ...addOption });
        const savedOption = await this.OptionRespository.save(newOption)

        newPoll.options = [savedOption]
        const savedPoll = this.pollRespository.save(newPoll)
        return savedPoll;

    }

    async getAllPolls(id?: number) {
        if (!id) {
            return await this.pollRespository.find();
        }
        return await this.pollRespository.findOneBy({ id })
    }
    /*Eager loading in TypeORM is a way to retrieve related entities along with the main entity in a single query, rather than making separate queries for each related entity. This can help improve performance by reducing the number of database queries required when fetching data with relationships.
    
     you have two entities: User and Post, where each user can have multiple posts. We'll demonstrate how to use eager loading to fetch users along with their associated posts.*/
    async findAllUsers() {
        const user = await this.userRespository.find({ relations: ['posts'] });///here relations is eager for posts

        //    return this.userRespository.find();
        return user;
    }
    async findUserById(id:number) {
        // console.log(id+'hjghgjhgjh');
        
       return await this.userRespository.findOneBy({id})
    }
    async createUser(createUser: UserDto) {

        const newUser = this.userRespository.create({ ...createUser, createdAt: new Date() })
        await this.userRespository.save(newUser);
        return newUser
    }

    async updateUser(id: number, updateUser: UserDto) {
        return this.userRespository.update({ id }, { ...updateUser })
    }

    async deleteUserById(id: number) {
        return this.userRespository.delete({ id })
    }

    async createUserProfile(id: number, userProfileDto: userProfileDto) {
        const newUser = await this.userRespository.findOneBy({ id })
        if (!newUser) {
            throw new HttpException('User Not found. Cannot create a new profile', HttpStatus.BAD_REQUEST);
        }
        const newProfile = this.profileRepository.create({ ...userProfileDto })

        const savedProfile = await this.profileRepository.save(newProfile);

        newUser.profile = savedProfile

        return savedProfile;
    }

    async createUserPost(id: number, userPost: CreateUserPostparams) {
        const newUser = await this.userRespository.findOneBy({ id });
        const newPost = this.postsRepository.create({ ...userPost })

        const savedPosts = await this.postsRepository.save(newPost);

        newUser.posts = [savedPosts]
        const posts = await this.userRespository.save(newUser);

        return posts;
    }

}