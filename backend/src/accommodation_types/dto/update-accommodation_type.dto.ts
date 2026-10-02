import { PartialType } from '@nestjs/mapped-types';
import { CreateAccommodationTypeDto } from './create-accommodation_type.dto';

export class UpdateAccommodationTypeDto extends PartialType(CreateAccommodationTypeDto) {}
