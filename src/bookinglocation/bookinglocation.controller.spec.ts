import { Test, TestingModule } from '@nestjs/testing';
import { BookingLocationController } from './bookinglocation.controller';
import { BookingLocationService } from './bookinglocation.service';

describe('BookinglocationController', () => {
  let controller: BookingLocationController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [BookingLocationController],
      providers: [BookingLocationService],
    }).compile();

    controller = module.get<BookingLocationController>(
      BookinglocationController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
