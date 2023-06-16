import { Module } from '@nestjs/common';

import { AppController } from '_app.controller';
import { AppService } from '_app.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
