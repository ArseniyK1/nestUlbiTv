import { Module } from '@nestjs/common';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { rolesProviders, userProviders, userRolesProviders } from '../contants';

@Module({
  controllers: [RolesController],
  providers: [RolesService, rolesProviders, userProviders, userRolesProviders],
  exports: [RolesService],
})
export class RolesModule {}
