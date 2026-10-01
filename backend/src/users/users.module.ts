import { Module } from '@nestjs/common';
import { UsersService } from './users.service.js';
import { UsersController } from './users.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './entities/user.entity.js';
import { Role } from './entities/role.entity.js';
import { Permission } from './entities/permissions.entity.js';

@Module({
  imports:[TypeOrmModule.forFeature([Users, Role, Permission])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
