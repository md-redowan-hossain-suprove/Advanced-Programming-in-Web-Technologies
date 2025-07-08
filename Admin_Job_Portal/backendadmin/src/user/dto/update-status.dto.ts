
import { IsOptional, IsIn } from 'class-validator';

export class UpdateStatusDto {
  @IsOptional()
  @IsIn(['pending', 'accepted', 'rejected'])
  cvStatus?: string;

  @IsOptional()
  @IsIn(['called', 'not called'])
  vivaStatus?: string;
}
