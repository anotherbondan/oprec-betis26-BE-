import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { CreateHikerDto } from './dto/create-hiker.dto';
import { UpdateHikerDto } from './dto/update-hiker.dto';

@Injectable()
export class HikerService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateHikerDto) {
    return this.prisma.hiker.create({ data });
  }

  findAll() {
    return this.prisma.hiker.findMany({
      include: { permits: true },
    });
  }

  findOne(id: string) {
    return this.prisma.hiker.findUnique({
      where: { id },
      include: { permits: true },
    });
  }

  update(id: string, data: UpdateHikerDto) {
    return this.prisma.hiker.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.hiker.delete({
      where: { id },
    });
  }
}
