import { IsNotEmpty, IsOptional, IsISO8601 } from 'class-validator';

export class CreateEventDto {
  @IsNotEmpty()
  title: string;

  @IsOptional()
  description?: string;

  @IsISO8601()
  date: string;
}
