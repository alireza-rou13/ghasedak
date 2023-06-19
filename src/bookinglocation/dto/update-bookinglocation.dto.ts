import { PartialType } from '@nestjs/swagger';
import { CreateBookingLocationDto } from './create-bookinglocation.dto';

export class UpdateBookingLocationDto extends PartialType(
  CreateBookingLocationDto,
) {}
