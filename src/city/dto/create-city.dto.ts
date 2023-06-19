import { ApiProperty } from '@nestjs/swagger';
import { MinLength, IsString } from 'class-validator';

export class CreateCityDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  title: string;
}
