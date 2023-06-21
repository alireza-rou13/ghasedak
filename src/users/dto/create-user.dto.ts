import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MinLength(3)
  username: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(3)
  fullname?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(3)
  hash?: string;

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(2)
  data?: Prisma.InputJsonObject;
}
