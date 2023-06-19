import { BookingLocation } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class BookingLocationEntity implements BookingLocation {
  @ApiProperty()
  id: string;
  @ApiProperty()
  title: string;
  @ApiProperty()
  cityId: string;
  @ApiProperty()
  order: number;
}
