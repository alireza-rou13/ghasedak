import { ApiProperty } from '@nestjs/swagger';
import { Prisma } from '@prisma/client';
import { IsOptional, IsString, MinLength } from 'class-validator';

export class LdapSignup {
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

  @ApiProperty()
  @IsOptional()
  data: Prisma.JsonValue;
}
