import { Injectable, NotFoundException } from "@nestjs/common";
import { UserRepositoryInterface } from "./interfaces/user-repository.interface";
import { User } from "./entities/user.entity";
import { CreateUserDto } from "./dtos/create-user.dto";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(
        private readonly userRepository: UserRepositoryInterface
    ) {}

    async getAllUsers(): Promise<User[]> {
        return this.userRepository.findAll();
    }

    async getById(id: number): Promise<User> {
        return this.userRepository.findById(id);
    }

    async createUser(createUserDto: CreateUserDto) {
        createUserDto.password = await this.encryptText(createUserDto.password);
        return this.userRepository.create(Object.assign(new User(), createUserDto));
    }

    //TODO: MOVERLO A UTILS
    private async encryptText(text: string): Promise<string> {
        const saltRounds: number = 10;
        return await bcrypt.hash(text, saltRounds);
    }

    async updateUserStatus(userId: number, status: boolean) {
        const user = await this.getById(userId);

        if (!user) throw new NotFoundException("El usuario no se encontro");

        user.status = status;
        console.log(user);
        return this.userRepository.create(user);
    }

    async findByEmail(email: string): Promise<User> {
        return this.userRepository.findByEmail(email);
    }
}
