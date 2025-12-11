import { IsNotEmpty, IsOptional, IsISO8601, IsString } from 'class-validator';

export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;

  @IsOptional()
  @IsString()
  description?: string;

  @IsISO8601()
  date: string;
}
