import { IsOptional, IsISO8601, IsString } from 'class-validator';

export class UpdateEventDto {
  @IsOptional()
  @IsString()
  title?: string;

  @IsOptional()
  description?: string;

  @IsOptional()
  @IsISO8601()
  date?: string;
}
