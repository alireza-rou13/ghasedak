import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private prisma: PrismaService,
    private jwtService: JwtService,
    private config: ConfigService,
  ) {}

  async login(loginDto: LoginDto) {
    //find User by username
    const user = await this.prisma.user.findUniqueOrThrow({
      where: { username: loginDto.username },
    });
    //throw error if not found
    //compare password
    const pwmatches = await argon.verify(user.hash, loginDto.password);
    //throw error if password not equal
    if (!pwmatches) throw new ForbiddenException('Credentials Incorrect');
    //send back to user
    const payload = { sub: user.id, username: user.username };
    const secret = this.config.get('JWT_SECRET');
    //return Token
    return {
      access_token: await this.jwtService.signAsync(payload, {
        expiresIn: '240m',
        secret: secret,
      }),
    };
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

  //Login With Active Directory
  async loginAD(loginDto: LoginDto) {
    //check if username exists in baseDN
    //throw error if not found
    //compare password
    //throw error if password not equal
    // if (!pwmatches) throw new ForbiddenException('Credentials Incorrect');
    //check if user exists in Ghasedak
    //create user
    //send back to user
    // const payload = { sub: user.id, username: user.username };
    // const secret = this.config.get('JWT_SECRET');
    //return Token
    // return {
    //   access_token: await this.jwtService.signAsync(payload, {
    //     expiresIn: '240m',
    //     secret: secret,
    //   }),
    // };
    return 'to do';
  }
}
