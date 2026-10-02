import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RoleModule } from './role/role.module';
import { PermissionModule } from './permission/permission.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Users } from './users/entities/user.entity';
import { Permission } from './permission/entities/permission.entity';
import { Role } from './role/entities/role.entity';
import { CompaniesModule } from './companies/companies.module';
import { CustomersModule } from './customers/customers.module';
import { AccommodationsModule } from './accommodations/accommodations.module';
import { AccommodationTypesModule } from './accommodation_types/accommodation_types.module';
import { BookingsModule } from './bookings/bookings.module';
import { BookingStatusModule } from './booking_status/booking_status.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
       type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: 'Umang#2005',
      database: 'accomadation',
      entities: [Users, Permission, Role],
      autoLoadEntities: true,
      synchronize: true
    }),
    UsersModule, RoleModule, PermissionModule, CompaniesModule, CustomersModule, AccommodationsModule, AccommodationTypesModule, BookingsModule, BookingStatusModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
