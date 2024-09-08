import { User } from "src/users/entities/user.entity";

export abstract class UserRepositoryInterface {
    abstract findAll(): Promise<User[]>;
    abstract findById(id: number): Promise<User>;
    abstract create(user: User): Promise<User>;
    abstract findByEmail(email: string): Promise<User>;
}
