import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async getProfile(userId: number) {
    const user = await this.prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true, createdAt: true }
    });
    if (!user) throw new NotFoundException();
    return user;
  }

  async updateProfile(userId: number, data: { name?: string }) {
    return this.prisma.user.update({
      where: { id: userId },
      data
    });
  }
}
