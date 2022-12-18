import { AppError } from '@helpers/error';

import { SampleRepository } from '@app-types/repository';

import { inMemoryRepository } from '../../database/memory';

export class SampleService {
  private sampleRepository: SampleRepository;

  constructor(repository: SampleRepository) {
    this.sampleRepository = repository;
  }

  sayHelloFromUser(name: string) {
    const user = this.sampleRepository.getUser(name);

    if (!user) throw new AppError(400, 'User not found');

    return `Hello from ${user}!`;
  }
}

export const sampleService = new SampleService(inMemoryRepository);
