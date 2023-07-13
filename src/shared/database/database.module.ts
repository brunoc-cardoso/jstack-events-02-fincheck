import { Global, Module } from '@nestjs/common';

import { PrismaService } from '_shared/database/prisma.service';
import { UsersRepository } from '_shared/database/repositories/users.repositories';

@Global()
@Module({
  providers: [PrismaService, UsersRepository],
  exports: [UsersRepository],
})
export class DatabaseModule {}
