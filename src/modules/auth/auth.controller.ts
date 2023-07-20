import { Body, Controller, Post } from '@nestjs/common';

import { AuthService } from '_modules/auth/auth.service';
import { AuthenticateDto } from '_modules/auth/dto/authenticate.dto';
import { SignupDto } from '_modules/auth/dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  authenticate(@Body() authenticateDto: AuthenticateDto) {
    return this.authService.authenticate(authenticateDto);
  }

  @Post('signup')
  create(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
