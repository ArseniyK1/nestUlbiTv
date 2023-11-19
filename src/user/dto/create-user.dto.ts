import { IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @IsString()
  @ApiProperty({ example: 'email@email.ru' })
  email: string;

  @ApiProperty({ example: '123456' })
  @IsString()
  password: string;
}
