import { ForbiddenException, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as argon from 'argon2';
import { ConfigService } from '@nestjs/config';
import ActiveDirectory = require('activedirectory2');
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';
import { use } from 'passport';

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
    const query = await this.prisma.setting.findUnique({
      where: { key: 'ad_login' },
      select: { options: true },
    });
    const config = {
      url: query.options['url'],
      baseDN: query.options['baseDN'],
      username: loginDto.username,
      password: loginDto.password,
    };
    //check if username exists in baseDN
    // console.log(url.options['url']);

    const username = loginDto.username;
    const password = loginDto.password;

    const auth = await ad_login(config, username, password);
    if (!auth) {
      throw new ForbiddenException('Credentials Incorrect')
    }
    // const exists = await this.prisma.user.findUnique('')
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
  }
}
//Login with Active Directory
async function ad_login(config, username, password) {
  const ad = new ActiveDirectory(config);
  return new Promise((resolve, reject) => {
    ad.authenticate(username, password, (err, auth) => {
      if (err) {
        console.log('Authentication failed:', err);
        reject(new ForbiddenException('Credentials Incorrect'));
      } else if (auth) {
        console.log('Authentication successful');
        resolve('Authentication successful');
      } else {
        console.log('Authentication failed: incorrect username or password');
        reject(new ForbiddenException('Credentials Incorrect'));
      }
    });
  });
}
