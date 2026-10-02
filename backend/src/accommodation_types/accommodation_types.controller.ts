import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AccommodationTypesService } from './accommodation_types.service';
import { CreateAccommodationTypeDto } from './dto/create-accommodation_type.dto';
import { UpdateAccommodationTypeDto } from './dto/update-accommodation_type.dto';

@Controller('accommodation-types')
export class AccommodationTypesController {
  constructor(private readonly accommodationTypesService: AccommodationTypesService) {}

  @Post()
  create(@Body() createAccommodationTypeDto: CreateAccommodationTypeDto) {
    return this.accommodationTypesService.create(createAccommodationTypeDto);
  }

  @Get()
  findAll() {
    return this.accommodationTypesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.accommodationTypesService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAccommodationTypeDto: UpdateAccommodationTypeDto) {
    return this.accommodationTypesService.update(+id, updateAccommodationTypeDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.accommodationTypesService.remove(+id);
  }
}
