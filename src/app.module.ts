import { Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';

import { AuthGuard } from '_modules/auth/auth.guard';
import { AuthModule } from '_modules/auth/auth.module';
import { UsersModule } from '_modules/users/users.module';
import { DatabaseModule } from '_shared/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [
    {
      provide: APP_GUARD,
      useClass: AuthGuard,
    },
  ],
})
export class AppModule {}
