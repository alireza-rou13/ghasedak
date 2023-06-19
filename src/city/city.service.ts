import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}

  async create(createCityDto: CreateCityDto) {
    try {
      return await this.prisma.city.create({ data: createCityDto });
    } catch (error) {
      console.log(error);
      return new BadRequestException(
        `name ${createCityDto.title} is already created`,
      );
    }
  }

  async findAll() {
    return this.prisma.city.findMany();
  }

  async findOne(id: string) {
    return this.prisma.city.findUnique({ where: { id } });
  }

  async update(id: string, updateCityDto: UpdateCityDto) {
    try {
      return await this.prisma.city.update({
        where: { id },
        data: updateCityDto,
      });
    } catch (error) {
      console.log(error);
      return new BadRequestException();
    }
  }

  async remove(id: string) {
    try {
      return await this.prisma.city.delete({ where: { id } });
    } catch (error) {
      console.log(error);
      return new BadRequestException();
    }
  }
}
