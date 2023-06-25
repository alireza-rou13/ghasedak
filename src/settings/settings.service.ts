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
    return this.prisma.setting.findMany();
  }

  async findKey(key: string) {
    return this.prisma.setting.findUnique({ where: { key } });
  }

  async findOne(id: string) {
    return this.prisma.setting.findUnique({ where: { id } });
  }

  async update(id: string, updateSettingDto: UpdateSettingDto) {
    return `This action updates a #${id} setting`;
  }

  async remove(id: string) {
    return `This action removes a #${id} setting`;
  }
}
