import { ApiProperty } from '@nestjs/swagger';
import { IsString, MinLength } from 'class-validator';

export class LoginDto {
  @IsString()
  @MinLength(2)
  @ApiProperty()
  username: string;

  @IsString()
  @MinLength(2)
  @ApiProperty()
  password: string;
}
