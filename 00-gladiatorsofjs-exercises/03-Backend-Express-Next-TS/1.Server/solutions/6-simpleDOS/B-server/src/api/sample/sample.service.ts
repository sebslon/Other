import { AppError } from "../../helpers/error";
import { IRepository, SampleRepository } from "../../types";

export class SampleService {
  sampleRepository: SampleRepository;

  constructor(repository: SampleRepository) {
    this.sampleRepository = repository;
  }

  sayHelloFromUser(name: string) {
    const user = this.sampleRepository.getUser(name);

    if (!user) throw new AppError(400, "User not found");

    return `Hello from ${user}!`;
  }
}
