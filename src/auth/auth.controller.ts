import { Body, Controller, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dtos/login.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Post('login')
    async login(@Body() loginDto: LoginDto) {
        console.log("login dto", loginDto);
        const user = await this.authService.validateUser(loginDto.email, loginDto.password);

        if(!user) throw new Error("No se pudo autenticar, credenciales erroneas");

        return this.authService.login(user);
    }
}
