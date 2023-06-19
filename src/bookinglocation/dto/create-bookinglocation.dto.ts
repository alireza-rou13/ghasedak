import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsString, IsUUID, MinLength } from 'class-validator';

export class CreateBookingLocationDto {
  @IsString()
  @MinLength(2)
  @ApiProperty()
  title: string;

  @IsString()
  @IsUUID()
  @ApiProperty()
  cityId: string;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  order?: number;
}
