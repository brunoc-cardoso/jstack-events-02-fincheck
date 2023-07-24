import { Injectable } from '@nestjs/common';

import { CategoriesRepository } from '_shared/database/repositories/categories.repositories';

@Injectable()
export class CategoriesService {
  constructor(private readonly categoriesRepository: CategoriesRepository) {}

  findAllByUserId(userId: string) {
    console.log(userId);

    return this.categoriesRepository.findMany({
      where: {
        userId,
      },
    });
  }
}
