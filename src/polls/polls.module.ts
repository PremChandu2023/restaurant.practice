import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './database-type-orm/Entities/User';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';
import { Profile } from './database-type-orm/Entities/Profile';
import { Posts } from './database-type-orm/Entities/Post.entity';
import { Polls } from './database-type-orm/Entities/Polls.entity';
import { Votes } from './database-type-orm/Entities/Vote.entity';
import { Option } from './database-type-orm/Entities/Options.entity';
import { UserControllers } from './user-controller';
import { UserServices } from './user-data-service';

@Module({
    imports: [TypeOrmModule.forFeature([User,Profile,Posts,Polls,Votes,Option])],
    controllers:[PollsController, UserControllers],
    providers:[PollsService, UserServices]
})
export class PollsModule {}
