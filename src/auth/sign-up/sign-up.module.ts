import { Module } from '@nestjs/common';
import { SignUpService } from './sign-up.service';
import { SignUpController } from './sign-up.controller';
import { UsersModule } from 'src/users/users.module';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
        secret: process.env.JWT_SECRET_KEY,
        signOptions: { expiresIn: process.env.AUTH_EXPIRES_IN_HOUR }
    })
  ],
  controllers: [SignUpController],
  providers: [SignUpService],
})
export class SignUpModule {}
