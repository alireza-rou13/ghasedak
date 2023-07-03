import { ApiProperty } from '@nestjs/swagger';
import {
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
}
