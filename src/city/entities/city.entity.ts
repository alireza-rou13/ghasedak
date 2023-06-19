import { ApiProperty } from '@nestjs/swagger';
import { City } from '@prisma/client';

export class CityEntity implements City {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
}
