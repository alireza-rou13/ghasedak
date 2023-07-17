import { ApiProperty } from '@nestjs/swagger';
import { BookingType } from '@prisma/client';
import {
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  MinLength,
} from 'class-validator';

export class CreateBookingDto {
  @IsString()
  @MinLength(2)
  @ApiProperty()
  title: string;

  @IsOptional()
  @ApiProperty()
  description: string;

  @IsNumber()
  @ApiProperty()
  startDate: number;

  @IsNumber()
  @ApiProperty()
  endDate: number;

  @IsNotEmpty()
  @IsEnum(BookingType)
  type: BookingType;

  @IsNotEmpty()
  @IsUUID()
  bookingLocationId: string;
}
