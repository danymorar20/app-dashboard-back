import { Module } from '@nestjs/common';
import { LoginController } from './login.controller';
import { LoginService } from './login.service';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
        secret: process.env.JWT_SECRET_KEY,
        signOptions: { expiresIn: process.env.AUTH_EXPIRES_IN_HOUR }
    }),
  ],
  controllers: [LoginController],
  providers: [LoginService],
})
export class LoginModule {}
