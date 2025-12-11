import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { PrismaService } from './prisma/prisma.service';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './auth/jwt.strategy';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { EventsService } from './events/events.service';
import { EventsController } from './events/events.controller';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: process.env.JWT_SECRET,
        signOptions: { expiresIn: '1h' }
      })
    })
  ],
  controllers: [AuthController, UserController, EventsController],
  providers: [
    PrismaService,
    AuthService,
    JwtStrategy,
    UserService,
    EventsService
  ]
})
export class AppModule {}
