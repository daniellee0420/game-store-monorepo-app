import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { HttpModule } from '@nestjs/axios';
import { ConfigModule } from '@nestjs/config';
import { GameResolver, GenreResolver, TagResolver, PublisherResolver } from './resolvers';
@Module({
  imports: [
    HttpModule,
    ConfigModule,
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  providers: [GameResolver, GenreResolver, TagResolver, PublisherResolver],
})
export class AppModule {}
