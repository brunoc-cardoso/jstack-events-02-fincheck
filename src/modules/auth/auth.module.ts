import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';

import { AuthController } from '_modules/auth/auth.controller';
import { AuthService } from '_modules/auth/auth.service';
import { env } from '_shared/config/env';

@Module({
  imports: [
    JwtModule.register({
      signOptions: { expiresIn: '7d' },
      secret: env.jwtSecret,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
