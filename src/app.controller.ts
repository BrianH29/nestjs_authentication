import { Controller, Get, Post, UseGuards, Request } from '@nestjs/common';
import { AppService } from './app.service';
import { AuthService } from "./auth/auth.service";
import { LocalAuthGuard } from "./auth/local-auth.guard";
import { AuthenticatedGuard } from './auth/authenticated.guard';
import { JwtAuthGuard } from "./auth/jwt-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly authService: AuthService) {}

  //POST/ login
  @UseGuards(LocalAuthGuard)
  @Post('login')
  login(@Request() req): any {
    return this.authService.login(req.user);  // TODO: return JWT access token
  }

  //GET/ protected
  @UseGuards(JwtAuthGuard)
  @Get('protected')
  getHello(@Request() req): string { // TODO: require an Bearer token, validate token
    return req.user
  }
}
