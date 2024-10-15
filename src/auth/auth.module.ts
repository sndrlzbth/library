import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './auth.service';
import { UsersModule } from '../users/users.module';
import { AuthController } from './auth.controller';
import { JwtStrategy } from './jwt.stratergy';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  providers: [AuthService, JwtStrategy],
  imports: [
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      global: true,
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService)=>({
        secret: configService.get<string>('JWT_SECRET'),
      }),
      inject: [ConfigService],
    })
    // JwtModule.register({
    //   global: true,
    //   secret: 'DFGBLSOEMTVMSLWO', 
    //   signOptions: { expiresIn: '1h' },
    // }),
  ],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
