import { PrismaService } from '../prisma/prisma.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: number, dto: CreateEventDto): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }>;
    findToday(userId: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }[]>;
    history(userId: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }[]>;
    update(userId: number, id: number, dto: UpdateEventDto): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }>;
    remove(userId: number, id: number): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }>;
}
