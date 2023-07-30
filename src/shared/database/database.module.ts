import { Global, Module } from '@nestjs/common';

import { PrismaService } from '_shared/database/prisma.service';
import { BankAccountRepository } from '_shared/database/repositories/bank-accounts.repositories';
import { CategoriesRepository } from '_shared/database/repositories/categories.repositories';
import { UsersRepository } from '_shared/database/repositories/users.repositories';

@Global()
@Module({
  providers: [
    PrismaService,
    UsersRepository,
    CategoriesRepository,
    BankAccountRepository,
  ],
  exports: [UsersRepository, CategoriesRepository, BankAccountRepository],
})
export class DatabaseModule {}
