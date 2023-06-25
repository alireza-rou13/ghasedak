import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class SignupDto {
  @IsString()
  @MinLength(2)
  @ApiProperty()
  username: string;

  @IsString()
  @MinLength(2)
  @ApiProperty()
  password: string;

  @IsString()
  @IsOptional()
  @MinLength(3)
  @ApiProperty()
  fullname?: string;
}
