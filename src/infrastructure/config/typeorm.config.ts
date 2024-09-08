import { ConfigService } from "@nestjs/config";
import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { User } from "src/users/entities/user.entity";
require('dotenv').config();

export const typeOrmConfig = (configService: ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get<string>('DATABASE_HOST'),  
    port: configService.get<number>('DATABASE_PORT'),
    username: configService.get<string>('DATABASE_USER'),
    password: configService.get<string>('DATABASE_PASSWORD'),  
    database: configService.get<string>('DATABASE_NAME'),
    entities: [User],
    synchronize: configService.get<string>('DATABASE_NAME') === 'dev',
    autoLoadEntities: true,
});
