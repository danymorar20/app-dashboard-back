import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "./entities/user.entity";
import { UsersController } from "./users.controller";
import { UsersService } from "./users.service";
import { UserRepository } from "./repositories/user.repository";
import { UserRepositoryInterface } from "./interfaces/user-repository.interface";

@Module({
    imports: [
        TypeOrmModule.forFeature([User]),
    ],
    controllers: [
        UsersController
    ],
    providers: [
        UsersService,
        {
            provide: UserRepositoryInterface,
            useClass: UserRepository
        },
    ],
    exports: [UsersService]
})
export class UsersModule {}
