import { CatsRepository } from '../../types/repository';

export class CatsService {
  private catsRepository: CatsRepository;

  constructor(repository: CatsRepository) {
    this.catsRepository = repository;
  }
}
