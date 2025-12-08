import { Controller, Post, UseGuards, Body, Req, Get, Put, Param, Delete } from '@nestjs/common';
import { EventsService } from './events.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';

@UseGuards(JwtAuthGuard)
@Controller('events')
export class EventsController {
  constructor(private eventsService: EventsService) {}

  @Post()
  create(@Req() req: any, @Body() dto: CreateEventDto) {
    return this.eventsService.create(req.user.id, dto);
  }

  @Get('today')
  today(@Req() req: any) {
    return this.eventsService.findToday(req.user.id);
  }

  @Get('history')
  history(@Req() req: any) {
    return this.eventsService.history(req.user.id);
  }

  @Put(':id')
  update(@Req() req: any, @Param('id') id: string, @Body() dto: UpdateEventDto) {
    return this.eventsService.update(req.user.id, Number(id), dto);
  }

  @Delete(':id')
  remove(@Req() req: any, @Param('id') id: string) {
    return this.eventsService.remove(req.user.id, Number(id));
  }
}
