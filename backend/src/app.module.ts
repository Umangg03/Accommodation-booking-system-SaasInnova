import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { UsersModule } from './users/users.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity.js';
import { Role } from './users/entities/role.entity.js';
import { Permission } from './users/entities/permissions.entity.js';

@Module({
  imports: [TypeOrmModule.forRoot({
     type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'Umang#2005',
      database: 'accomadation',
      entities: [ Users, Role, Permission],
      autoLoadEntities: true,
      synchronize: true
  }),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
