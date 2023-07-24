import { Body, Controller, Post, SetMetadata } from '@nestjs/common';

import { AuthService } from '_modules/auth/auth.service';
import { SigninDto } from '_modules/auth/dto/signin';
import { SignupDto } from '_modules/auth/dto/signup.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('signin')
  @SetMetadata('IS_PUBLIC', true)
  authenticate(@Body() signin: SigninDto) {
    return this.authService.signin(signin);
  }

  @Post('signup')
  @SetMetadata('IS_PUBLIC', true)
  signup(@Body() signupDto: SignupDto) {
    return this.authService.signup(signupDto);
  }
}
