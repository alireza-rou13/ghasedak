import { ApiProperty } from '@nestjs/swagger';
import { BookingStatus, BookingType } from '@prisma/client';
import { IsString, MinLength } from 'class-validator';

export class CreateBookDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  title: string;
  description?: string;
  status: BookingStatus;
  startDate: Date;
  endDate: Date;
  type: BookingType;
  bookingLocationId: string;
  createdById: string;
}
