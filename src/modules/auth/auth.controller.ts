import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from '_modules/auth/auth.service';
import { SigninDto } from '_modules/auth/dto/signin';
import { SignupDto } from '_modules/auth/dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  authenticate(@Body() signin: SigninDto) {
    return this.authService.signin(signin);
  }

  @Post('signup')
  create(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
