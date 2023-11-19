import { BadRequestException, Inject, Injectable } from '@nestjs/common';
import { CreateRoleDto } from './dto/create-role.dto';
import { Role } from './entities/roles.entity';

@Injectable()
export class RolesService {
  constructor(
    @Inject('ROLES_REPOSITORY')
    private rolesRepository: typeof Role,
  ) {}

  async createRole(dto: CreateRoleDto) {
    if (!!dto.value && !!dto.description) {
      return await this.rolesRepository.create(dto);
    } else {
      throw new BadRequestException('Укажите значение и(или) описание роли');
    }
  }

  async getRoleByValue(value: string) {
    if (!!value) {
      return await this.rolesRepository.findOne({ where: { value } });
    } else {
      throw new BadRequestException('Укажите значение роли!');
    }
  }
}
