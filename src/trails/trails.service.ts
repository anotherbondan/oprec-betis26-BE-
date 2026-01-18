import { Injectable } from '@nestjs/common';
import { CreateTrailDto } from './dto/create-trail.dto';
import { UpdateTrailDto } from './dto/update-trail.dto';
import { PrismaService } from '../prisma.service';

@Injectable()
export class TrailService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTrailDto) {
    return this.prisma.trail.create({ data });
  }

  findAll() {
    return this.prisma.trail.findMany({
      include: { permits: true },
    });
  }

  findOne(id: string) {
    return this.prisma.trail.findUnique({
      where: { id },
      include: { permits: true },
    });
  }

  update(id: string, data: Partial<CreateTrailDto>) {
    return this.prisma.trail.update({
      where: { id },
      data,
    });
  }

  remove(id: string) {
    return this.prisma.trail.delete({ where: { id } });
  }
}
