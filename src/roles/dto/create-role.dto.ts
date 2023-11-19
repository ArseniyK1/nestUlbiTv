import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateRoleDto {
  @ApiProperty({ example: 'ADMIN' })
  @IsString()
  value: string;

  @ApiProperty({ example: 'Администратор' })
  @IsString()
  description: string;
}
