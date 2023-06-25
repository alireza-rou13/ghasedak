import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //Basic Login
  @Post('login')
  // @ApiCreatedResponse
  async signin(@Body() loginDto: LoginDto) {
    return await this.authService.login(loginDto);
  }
  //Basic Signup
  @Post('signup')
  // @ApiCreatedResponse
  async signup(@Body() signupDto: SignupDto) {
    return await this.authService.signup(signupDto);
  }

  //Login With Active Directory
  @Post('login/ad')
  // @ApiCreatedResponse
  async loginAD(@Body() loginDto: LoginDto) {
    return await this.authService.loginAD(loginDto);
  }
}
