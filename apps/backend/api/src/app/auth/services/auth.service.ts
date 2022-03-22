import { Injectable, UnauthorizedException } from '@nestjs/common';
import { ISignAuthPayload, ISignAuthResponse } from '@test-nx/shared/data-access/interfaces';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../../user/services/user.service';
import { PasswordService } from './password.service';
import { UserEntity } from '../../user/entities/user.entity';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {
    constructor(
        private readonly jwtService: JwtService,
        private readonly userService: UserService,
        private readonly passwordService: PasswordService
    ) {
    }

    async validateUser(username: string, pass: string): Promise<Omit<UserEntity, 'password'>> {
        const user = await this.userService.findOneByUserName(username);
        const isValid = user ? await this.passwordService.compareHash(pass, user.password) : false;

        if (!isValid) {
            return null;
        }

        delete user.password;
        return user;
    }

    async login(payload: ISignAuthPayload): Promise<ISignAuthResponse> {
        const user = await this.validateUser(payload.username, payload.password);

        if (!user) {
            throw new UnauthorizedException();
        }

        const jwtPayload = {username: user.username, userId: user.id};

        return {
            accessToken: await this.jwtService.signAsync(jwtPayload),
            expiresIn: (new Date(Date.now() + environment.jwt.expiresIn)).getTime(),
            id: user.id
        }
    }
}
