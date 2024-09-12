import { Body, Controller, Post } from '@nestjs/common';
import { LoginDto } from './dtos/login.dto';
import { LoginService } from './login.service';

@Controller('auth/login')
export class LoginController {
    constructor(private readonly loginService: LoginService) {}

    @Post('')
    async login(@Body() loginDto: LoginDto) {
        return this.loginService.login(loginDto);
    }
}
