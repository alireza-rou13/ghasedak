import { ForbiddenException, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import * as argon from 'argon2';

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService) {}

  async login(loginDto: LoginDto) {
    //find User by username
    const user = await this.prisma.user.findUniqueOrThrow({where: {username: loginDto.username}})
    //throw error if not found
    //compare password
    const pwmatches = await argon.verify(user.hash,loginDto.password);
    //throw error if password not equal
    if(!pwmatches)
      throw new ForbiddenException('Credentials Incorrect')
    //send back to user
    return user;
    
    return 'login';
  }
  async signup(signupDto: SignupDto) {
    //Generate Password Hash
    const hash = await argon.hash(signupDto.password);
    //save New user in DB
    const user = await this.prisma.user.create({
      data: {
        username: signupDto.username,
        hash,
        fullname: signupDto.fullname,
      },
    });
    //Return User is created
    return { msg: 'user created' };
  }
}
