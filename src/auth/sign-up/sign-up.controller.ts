import { Body, Controller, Post } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignUpDto } from './dtos/sign-up.dto';
import { User } from 'src/users/entities/user.entity';

@Controller('auth/sign-up')
export class SignUpController {
  constructor(private readonly signUpService: SignUpService) {}

  @Post('')
  async signUp(@Body() signUp: SignUpDto) {
    return this.signUpService.signUp(signUp.userInfo);
  }
}
