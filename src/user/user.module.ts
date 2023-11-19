import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { rolesProviders, userProviders, userRolesProviders } from '../contants';
import { RolesModule } from '../roles/roles.module';

@Module({
  controllers: [UserController],
  providers: [UserService, userProviders, rolesProviders, userRolesProviders],
  imports: [RolesModule],
})
export class UserModule {}
