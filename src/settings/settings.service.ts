import { Injectable } from '@nestjs/common';
import { CreateSettingDto } from './dto/create-setting.dto';
import { UpdateSettingDto } from './dto/update-setting.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class SettingsService {
  constructor(private prisma: PrismaService) {}
  async create(createSettingDto: CreateSettingDto) {
    return this.prisma.setting.create({ data: createSettingDto });
  }

  async findAll() {
    return this.prisma.setting.findMany();
  }

  async findKey(key: string) {
    return this.prisma.setting.findUnique({ where: { key: key } });
  }

  async findOne(id: string) {
    return this.prisma.setting.findUnique({ where: { id } });
  }

  async update(id: string, updateSettingDto: UpdateSettingDto) {
    return this.prisma.setting.update({
      where: { id },
      data: updateSettingDto,
    });
  }

  async remove(id: string) {
    //check if user id have access
    //todo
    return this.prisma.user.delete({ where: { id } });
  }
}
