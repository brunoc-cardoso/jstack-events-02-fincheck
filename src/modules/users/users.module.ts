import { Module } from '@nestjs/common';

import { UsersController } from '_modules/users/users.controller';
import { UsersService } from '_modules/users/users.service';

@Module({
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
