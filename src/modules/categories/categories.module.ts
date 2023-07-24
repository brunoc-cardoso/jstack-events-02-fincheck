import { Module } from '@nestjs/common';

import { CategoriesController } from '_modules/categories/categories.controller';
import { CategoriesService } from '_modules/categories/categories.service';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService],
})
export class CategoriesModule {}
