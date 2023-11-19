import { User } from './user/entities/user.entity';
import { Role } from './roles/entities/roles.entity';
import { UserRoles } from './intermediateModels/UserRoles.entity';

export const userProviders = {
  provide: 'USER_REPOSITORY',
  useValue: User,
};

export const rolesProviders = {
  provide: 'ROLES_REPOSITORY',
  useValue: Role,
};
export const userRolesProviders = {
  provide: 'USER_ROLES_REPOSITORY',
  useValue: UserRoles,
};
