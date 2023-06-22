import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { SignupDto } from './dto/signup.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService){}
  
  @Post('login')
  // @ApiCreatedResponse
  async signin(@Body() loginDto: LoginDto){
    return await this.authService.login(loginDto);
  }

  @Post('signup')
  // @ApiCreatedResponse
  async signup(@Body() signupDto: SignupDto){
    return await this.authService.signup(signupDto);
  }
}
