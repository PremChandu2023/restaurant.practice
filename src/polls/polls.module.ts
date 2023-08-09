import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './database-type-orm/Entities/User';
import { PollsController } from './polls.controller';
import { PollsService } from './polls.service';

@Module({
    imports: [TypeOrmModule.forFeature([User])],
    controllers:[PollsController],
    providers:[PollsService]
})
export class PollsModule {}
