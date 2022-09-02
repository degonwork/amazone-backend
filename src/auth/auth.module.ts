import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { UserModule } from '../user/user.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtGaurd } from './gaurds/jwt.gaurd';
import { JwtStratery } from './gaurds/jwt.stratery';

@Module({
  imports: [
    UserModule,
    JwtModule.registerAsync({
      useFactory: () => ({
        secret: 'secret',
        signOptions: { expiresIn: '3600s' },
      }),
    })
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtGaurd, JwtStratery]
})
export class AuthModule { }
