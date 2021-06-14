import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { AuthService } from './auth.service';
import { LocalStategy } from "./local.strategy";

@Module({
  imports: [UsersModule, PassportModule],
  providers: [AuthService, LocalStategy]
})
export class AuthModule {}
