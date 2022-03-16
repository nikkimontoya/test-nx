import { Repository } from 'typeorm';
import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from '../entities/user.entity';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ) {}

    async find(): Promise<UserEntity[]> {
        return await this.userRepository.find();
    }

    async findOneById(id: number): Promise<UserEntity> {
        return await this.userRepository.findOne({id});
    }

    async findOneByUserName(username: string): Promise<UserEntity> {
        return await this.userRepository.findOne({username});
    }

    async createUser(user: Partial<UserEntity>): Promise<UserEntity> {
        const newUser = await this.userRepository.create(user);
        return this.userRepository.save(newUser);
    }
}
