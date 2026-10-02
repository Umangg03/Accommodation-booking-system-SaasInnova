import { Test, TestingModule } from '@nestjs/testing';
import { AccommodationTypesController } from './accommodation_types.controller';
import { AccommodationTypesService } from './accommodation_types.service';

describe('AccommodationTypesController', () => {
  let controller: AccommodationTypesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AccommodationTypesController],
      providers: [AccommodationTypesService],
    }).compile();

    controller = module.get<AccommodationTypesController>(AccommodationTypesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
