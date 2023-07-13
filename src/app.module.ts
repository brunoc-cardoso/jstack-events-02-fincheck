import { Module } from '@nestjs/common';

import { UsersModule } from '_modules/users/users.module';
import { DatabaseModule } from '_shared/database/database.module';

@Module({
  imports: [UsersModule, DatabaseModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
