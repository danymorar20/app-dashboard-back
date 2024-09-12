import { Injectable } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { AuthService } from '../auth.service';

@Injectable()
export class LoginService extends AuthService{
    async login(loginData: LoginDto) {
        const user = await this.validateUser(loginData.email, loginData.password);

        if(!user) throw new Error("No se pudo autenticar, credenciales erroneas");

        return this.getAccessToken(user);
    }
}
