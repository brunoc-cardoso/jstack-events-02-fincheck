import { Controller, Post, Body } from '@nestjs/common';

import { CreateUserDto } from '_modules/users/dto/create-user.dto';
import { UsersService } from '_modules/users/users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }
}
