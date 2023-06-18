import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class CityService {
  constructor(private prisma: PrismaService) {}
  
  async create(createCityDto: CreateCityDto) {
    try { return await this.prisma.city.create({data:createCityDto})}
    catch (error) { 
      console.log(error)
      return new BadRequestException(`name ${createCityDto.title} is already created`)
    }
    
  }

  findAll() {
    return this.prisma.city.findMany();
  }

  async findOne(id: string) {
    return this.prisma.city.findUnique({where: { id }})
  }

  update(id: number, updateCityDto: UpdateCityDto) {
    return `This action updates a #${id} city`;
  }

  remove(id: number) {
    return `This action removes a #${id} city`;
  }
}
