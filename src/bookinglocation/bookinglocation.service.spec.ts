import { Test, TestingModule } from '@nestjs/testing';
import { BookinglocationService } from './bookinglocation.service';

describe('BookinglocationService', () => {
  let service: BookinglocationService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookinglocationService],
    }).compile();

    service = module.get<BookinglocationService>(BookinglocationService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
