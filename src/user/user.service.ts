import {
  BadRequestException,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { RolesService } from '../roles/roles.service';

@Injectable()
export class UserService {
  constructor(
    @Inject('USER_REPOSITORY') private userRepository: typeof User,
    private roleService: RolesService,
  ) {}

  async create(dto: CreateUserDto) {
    if (!!dto.email && !!dto.password) {
      const validateUser: User = await this.userRepository.findOne({
        where: {
          email: dto.email,
          password: dto.password,
        },
      });
      if (validateUser) {
        throw new BadRequestException('Такой пользователь уже существует!');
      } else {
        const user = await this.userRepository.create(dto);
        const role = await this.roleService.getRoleByValue('USER');
        await user.$set('roles', [role.id]);
        return user;
      }
    } else {
      throw new BadRequestException('Не указан логин и(или) пароль');
    }
  }

  async findAll(): Promise<User[]> {
    return await this.userRepository.findAll({ include: { all: true } });
  }

  async findOne(id: number) {
    const user = await this.userRepository.findOne({ where: { id } });
    if (!user) {
      throw new NotFoundException('Пользователь не был найден!');
    }
    return user;
  }
  //
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
