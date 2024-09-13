import { Injectable } from '@nestjs/common';
import { User } from 'src/users/entities/user.entity';
import { AuthService } from '../auth.service';

@Injectable()
export class SignUpService extends AuthService {

    async signUp(newUser: Omit<User, "id">): Promise<object> {
        if (await this.validateUser(newUser.email, newUser.password)) throw new Error("El usuario existe");
        return await this.getAccessToken(await this.userService.createUser(newUser));
    }
}
