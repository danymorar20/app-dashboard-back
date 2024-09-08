import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
import { UserRepositoryInterface } from "src/users/interfaces/user-repository.interface";
import { Repository } from "typeorm";

@Injectable()
export class UserRepository implements UserRepositoryInterface {
    constructor(
        @InjectRepository(User)
        private readonly userRepo: Repository<User>,
      ) {}

      async findAll(): Promise<User[]> {
        return this.userRepo.find();
      }

      async findById(id: number): Promise<User> {
          return this.userRepo.findOneOrFail({ where: { id } });
      }

      async create(user: User): Promise<User> {
          return this.userRepo.save(user);
      }

      async findByEmail(email: string): Promise<User> {
          return this.userRepo.findOneOrFail({ where: { email: email }})
      }
}
