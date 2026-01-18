import { Injectable } from '@nestjs/common';
import { CreatePermitDto } from './dto/create-permit.dto';
import { UpdatePermitDto } from './dto/update-permit.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class PermitService {
  constructor(private prisma: PrismaService) {}

  create(data: CreatePermitDto) {
    return this.prisma.permit.create({
      data,
    });
  }

  findAll() {
    return this.prisma.permit.findMany({
      include: {
        hiker: true,
        trail: true,
      },
    });
  }

  findOne(id: string) {
    return this.prisma.permit.findUnique({
      where: { id },
      include: {
        hiker: true,
        trail: true,
      },
    });
  }

  remove(id: string) {
    return this.prisma.permit.delete({
      where: { id },
    });
  }
}
