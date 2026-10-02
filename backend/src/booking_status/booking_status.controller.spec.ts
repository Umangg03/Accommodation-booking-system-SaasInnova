import { Test, TestingModule } from '@nestjs/testing';
import { BookingStatusController } from './booking_status.controller';
import { BookingStatusService } from './booking_status.service';

describe('BookingStatusController', () => {
  let controller: BookingStatusController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingStatusController],
      providers: [BookingStatusService],
    }).compile();

    controller = module.get<BookingStatusController>(BookingStatusController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
