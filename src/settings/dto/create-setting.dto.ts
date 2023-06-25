import { ApiProperty } from "@nestjs/swagger";
import { Prisma } from "@prisma/client";
import { IsOptional, IsString, IsUUID, MinLength } from "class-validator";

export class CreateSettingDto {
  @ApiProperty()
  @IsString()
  @MinLength(2)
  title: string;
  
  @ApiProperty()
  @IsUUID()
  userId: string;

  @ApiProperty()
  @IsString()
  @MinLength(2)
  key: string

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(2)
  status:boolean

  @ApiProperty()
  @IsString()
  @IsOptional()
  @MinLength(2)
  options: Prisma.JsonValue;
}
