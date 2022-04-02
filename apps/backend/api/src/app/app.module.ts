import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {GraphQLModule} from '@nestjs/graphql';
import {ApolloDriver, ApolloDriverConfig} from '@nestjs/apollo';

import {AppController} from './app.controller';
import {environment} from '../environments/environment';
import {UserModule} from './user/user.module';
import {AuthModule} from './auth/auth.module';
import {resolverMap} from './app.resolver';
import {UserEntity} from './user/entities/user.entity';

@Module({
    imports: [
        TypeOrmModule.forRoot({
            ...environment.connection,
            entities: [UserEntity]
        }),
        GraphQLModule.forRoot<ApolloDriverConfig>({
            typePaths: ['./**/*.graphql'],
            context: ({req}) => ({req}),
            playground: true,
            driver: ApolloDriver,
            resolvers: [resolverMap]
        }),
        UserModule,
        AuthModule,
    ],
    controllers: [AppController]
})
export class AppModule {
}
