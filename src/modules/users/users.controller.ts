import { Controller, Get, Req } from '@nestjs/common';

import { UsersService } from '_modules/users/users.service';
import { ActiveUserId } from '_shared/decorators/ActiveUserId';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get('/me')
  me(@ActiveUserId() userId: string) {
    return this.usersService.getUserById(userId);
  }
}
