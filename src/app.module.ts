import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthGuard } from '_modules/auth/auth.guard';
import { AuthModule } from '_modules/auth/auth.module';
import { BankAccountsModule } from '_modules/bank-accounts/bank-accounts.module';
import { UsersModule } from '_modules/users/users.module';
import { DatabaseModule } from '_shared/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule, BankAccountsModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
