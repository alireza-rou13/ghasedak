import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}
  
  async login(loginDto: LoginDto){
    //Generate Password Hash


    return 'login';
  }
  async signup(signupDto: SignupDto) {
    
    //Generate Password Hash
    const hash=await argon.hash(signupDto.password)
    //save New user in DB
    const user = await this.prisma.user.create({data:{
      username:signupDto.username,
      hash,
      fullname:signupDto.fullname,
    }})
    //Return User is created
    return {msg : "user created"}
  }
}
