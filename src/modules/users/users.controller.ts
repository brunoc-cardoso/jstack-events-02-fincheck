import { Controller } from '@nestjs/common';

import { UsersService } from '_modules/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}
}
