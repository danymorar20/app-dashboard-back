import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { AuthController } from './auth.controller';

@Module({
    imports: [
        UsersModule,
        PassportModule,
        JwtModule.register({
            secret: process.env.JWT_SECRET_KEY,
            signOptions: { expiresIn: process.env.AUTH_EXPIRES_IN_HOUR }
        })
    ],
    providers: [
        AuthService,
        JwtStrategy
    ],
    controllers: [
        AuthController
    ],
    exports:
    [
        AuthService
    ]
})
export class AuthModule {}
