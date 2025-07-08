import { IsOptional, IsString } from 'class-validator';

export class UpdateSupportMessageDto {
  @IsOptional()
  @IsString()
  reply?: string;
}
