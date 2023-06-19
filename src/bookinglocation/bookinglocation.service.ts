import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateBookingLocationDto } from './dto/create-bookinglocation.dto';
import { UpdateBookingLocationDto } from './dto/update-bookinglocation.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BookingLocationService {
  constructor(private prisma: PrismaService) {}

  async create(createBookingLocationDto: CreateBookingLocationDto) {
    return await this.prisma.bookingLocation.create({
      data: createBookingLocationDto,
    });
  }

  findAll() {
    return this.prisma.bookingLocation.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.bookingLocation.findUnique({ where: { id } });
  }

  async update(id: string, updateBookingLocationDto: UpdateBookingLocationDto) {
    return await this.prisma.bookingLocation.update({
      where: { id },
      data: updateBookingLocationDto,
    });
  }

  async remove(id: string) {
    try {
      return await this.prisma.bookingLocation.delete({ where: { id } });
    } catch (error) {
      console.log(error);
      return new BadRequestException();
    }
  }
}
