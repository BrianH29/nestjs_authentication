import { Module } from '@nestjs/common';
import { JwtModule } from "@nestjs/jwt";
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { AuthService } from './auth.service';
import { LocalStategy } from "./local.strategy";
import { SessionSerializer } from "./session.serializer";

@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET', // put env variables
    signOptions: { expiresIn: '60s'}
  })],
  providers: [AuthService, LocalStategy],
  exports:  [AuthService]
})
export class AuthModule {}
