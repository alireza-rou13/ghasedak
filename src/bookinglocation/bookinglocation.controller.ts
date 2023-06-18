import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { BookingLocationService } from './bookinglocation.service';
import { CreateBookingLocationDto } from './dto/create-bookinglocation.dto';
import { UpdateBookingLocationDto } from './dto/update-bookinglocation.dto';
import { BookingLocationEntity } from './entities/bookinglocation.entity';

@Controller('bookinglocation')
@ApiTags("Booking Location")

export class BookingLocationController {
  constructor(private readonly bookinglocationService: BookingLocationService) {}
  
  
  @Post()
  @ApiCreatedResponse({type:BookingLocationEntity})
  async create(@Body() createBookingLocationDto: CreateBookingLocationDto) {
    return await this.bookinglocationService.create(createBookingLocationDto);
  }

  @Get()
  @ApiCreatedResponse({type:BookingLocationEntity, isArray:true})
  findAll() {
    return this.bookinglocationService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({type:BookingLocationEntity})
  findOne(@Param('id') id: string) {
    return this.bookinglocationService.findOne(id);
  }

  @Patch(':id')
  @ApiCreatedResponse({type:BookingLocationEntity})
  update(@Param('id') id: string, @Body() updateBookingLocationDto: UpdateBookingLocationDto) {
    return this.bookinglocationService.update(id, updateBookingLocationDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({type:BookingLocationEntity})
  remove(@Param('id') id: string) {
    return this.bookinglocationService.remove(id);
  }
}
