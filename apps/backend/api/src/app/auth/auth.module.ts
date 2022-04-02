import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthResolver } from './resolvers/auth.resolver';
import {UserService} from '../user/services/user.service';
import {PassportModule} from '@nestjs/passport';
import {JwtModule} from '@nestjs/jwt';
import {environment} from '../../environments/environment';
import {PasswordService} from './services/password.service';
import {JwtStrategy} from './services/jwt.strategy';

@Module({
    imports: [
        UserService,
        PassportModule.register({
            defaultStrategy: 'jwt'
        }),
        JwtModule.register({
            privateKey: environment.jwt.secret,
            signOptions: {
                expiresIn: environment.jwt.expiresIn
            }
        })
    ],
    exports: [AuthService, PassportModule],
    providers: [AuthService, AuthResolver, PasswordService, JwtStrategy]
})
export class AuthModule {}
