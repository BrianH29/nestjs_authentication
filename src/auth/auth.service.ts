import { Injectable } from '@nestjs/common';
import { UsersService } from "../users/users.service";
import { JwtService } from "@nestjs/jwt";

@Injectable()
export class AuthService {
  constructor(private userService: UsersService, private jwtService: JwtService){}

    async validateUser(username: string, password: string): Promise<any>{}

    async login(user:any){
      const payload = { name: user.name, sub:user.id};

      return{
        accsss_token: this.jwtService.sign(payload)
      };
    }
}
