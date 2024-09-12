import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/users/users.service";
import * as bcrypt from 'bcryptjs';
import { User } from "src/users/entities/user.entity";

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UsersService,
        private readonly jwtService: JwtService,
    ) {}

    protected async validateUser(email: string, password: string): Promise<any> {
        const user = await this.userService.findByEmail(email);

        if (user && (await bcrypt.compare(password, user.password))) {
            const { password, ...result } = user;
            return result;
        }

        return null;
    }

    protected async getAccessToken(user: User) {
        return {
            access_token: this.jwtService.sign({ username: user.email, sub: user.id })
        };
    }
}
