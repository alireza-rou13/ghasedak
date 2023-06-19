import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { CityService } from './city.service';
import { CreateCityDto } from './dto/create-city.dto';
import { UpdateCityDto } from './dto/update-city.dto';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { CityEntity } from './entities/city.entity';
import { isArray } from 'util';

@Controller('city')
@ApiTags('City')
export class CityController {
  constructor(private readonly cityService: CityService) {}

  @Post()
  @ApiCreatedResponse({ type: CityEntity })
  async create(@Body() createCityDto: CreateCityDto) {
    return await this.cityService.create(createCityDto);
  }

  @Get()
  @ApiCreatedResponse({ type: CityEntity, isArray: true })
  async findAll() {
    return await this.cityService.findAll();
  }

  @Get(':id')
  @ApiCreatedResponse({ type: CityEntity })
  async findOne(@Param('id') id: string) {
    const city = await this.cityService.findOne(id);
    if (!city) {
      return new NotFoundException(`city with id ${id} not found`);
    }
    return city;
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: CityEntity })
  async update(@Param('id') id: string, @Body() updateCityDto: UpdateCityDto) {
    return await this.cityService.update(id, updateCityDto);
  }

  @Delete(':id')
  @ApiCreatedResponse({ type: CityEntity })
  remove(@Param('id') id: string) {
    return this.cityService.remove(id);
  }
}
