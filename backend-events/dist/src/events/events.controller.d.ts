import { EventsService } from './events.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
export declare class EventsController {
    private eventsService;
    constructor(eventsService: EventsService);
    create(req: any, dto: CreateEventDto): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }>;
    today(req: any): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }[]>;
    history(req: any): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }[]>;
    update(req: any, id: string, dto: UpdateEventDto): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }>;
    remove(req: any, id: string): Promise<{
        id: number;
        createdAt: Date;
        title: string;
        description: string | null;
        date: Date;
        userId: number;
    }>;
}
