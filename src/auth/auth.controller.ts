import { Body, Controller, Post } from '@nestjs/common';
import { ApiCreatedResponse, ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';

@Controller('auth')
@ApiTags('Authentication')
export class AuthController {
  constructor(private readonly authService: AuthService){}
  
  @Post('login')
  // @ApiCreatedResponse
  async signin(@Body() loginDto: LoginDto){
    return await this.authService.login(loginDto);
  }
}
