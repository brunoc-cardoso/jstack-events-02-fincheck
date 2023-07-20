import { Module } from '@nestjs/common';

import { AuthModule } from '_modules/auth/auth.module';
import { UsersModule } from '_modules/users/users.module';
import { DatabaseModule } from '_shared/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule, AuthModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
