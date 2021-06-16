import { Module } from '@nestjs/common';
import { PassportModule } from "@nestjs/passport";
import { UsersModule } from "src/users/users.module";
import { AuthService } from './auth.service';
import { LocalStategy } from "./local.strategy";
import { SessionSerializer } from "./session.serializer";

@Module({
  imports: [UsersModule, PassportModule.register({session:true})],
  providers: [AuthService, LocalStategy, SessionSerializer]
})
export class AuthModule {}
