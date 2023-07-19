import { Injectable } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';
import { UpdateBookDto } from './dto/update-book.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class BooksService {
  constructor(private prisma: PrismaService) {}
  async create(createBookDto: CreateBookDto) {
    return this.prisma.booking.create({
      data: {
        ...createBookDto,
        startDate: new Date(createBookDto.startDate),
        endDate: new Date(createBookDto.endDate),
      },
    });
  }

  findAll() {
    return `This action returns all books`;
  }

  findOne(id: number) {
    return `This action returns a #${id} book`;
  }

  update(id: string, updateBookDto: UpdateBookDto) {
    return this.prisma.booking.update({
      where: { id },
      data: {
        ...updateBookDto,
        startDate: new Date(updateBookDto.startDate),
        endDate: new Date(updateBookDto.endDate),
      },
    });
  }

  remove(id: number) {
    return `This action removes a #${id} book`;
  }
}
