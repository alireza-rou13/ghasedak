import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}
  async create(createSettingDto: CreateSettingDto) {
    return this.prisma.setting.create({data: createSettingDto})
  }

  async findAll() {
    return `This action returns all settings`;
  }

  async findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  async update(id: number, updateSettingDto: UpdateSettingDto) {
    return `This action updates a #${id} setting`;
  }

  async remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
