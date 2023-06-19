import { Module } from '@nestjs/common';
import { BookingLocationService } from './bookinglocation.service';
import { BookingLocationController } from './bookinglocation.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [BookingLocationController],
  providers: [BookingLocationService],
  imports: [PrismaModule],
})
export class BookingLocationModule {}
