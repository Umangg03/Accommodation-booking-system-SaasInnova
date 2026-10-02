import { Module } from '@nestjs/common';
import { AccommodationTypesService } from './accommodation_types.service';
import { AccommodationTypesController } from './accommodation_types.controller';

@Module({
  controllers: [AccommodationTypesController],
  providers: [AccommodationTypesService],
})
export class AccommodationTypesModule {}
