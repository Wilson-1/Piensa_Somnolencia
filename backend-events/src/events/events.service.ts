import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@Injectable()
export class EventsService {
  constructor(private prisma: PrismaService) {}

  async create(userId: number, dto: CreateEventDto) {
    return this.prisma.event.create({
      data: {
        title: dto.title,
        description: dto.description,
        date: new Date(dto.date),
        userId
      }
    });
  }

  async findToday(userId: number) {
    const start = new Date();
    start.setHours(0,0,0,0);
    const end = new Date();
    end.setHours(23,59,59,999);

    return this.prisma.event.findMany({
      where: {
        userId,
        date: { gte: start, lte: end }
      },
      orderBy: { date: 'asc' }
    });
  }

  async history(userId: number) {
    return this.prisma.event.findMany({
      where: { userId },
      orderBy: { date: 'desc' }
    });
  }

  async update(userId: number, id: number, dto: UpdateEventDto) {
    const event = await this.prisma.event.findUnique({ where: { id } });
    if (!event || event.userId !== userId) throw new NotFoundException();
    return this.prisma.event.update({
      where: { id },
      data: {
        title: dto.title,
        description: dto.description,
        date: dto.date ? new Date(dto.date) : undefined
      }
    });
  }

  async remove(userId: number, id: number) {
    const event = await this.prisma.event.findUnique({ where: { id } });
    if (!event || event.userId !== userId) throw new NotFoundException();
    return this.prisma.event.delete({ where: { id } });
  }
}
