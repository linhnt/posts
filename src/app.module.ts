import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostsModule } from './posts/posts.module';
import { HttpModule } from '@nestjs/axios';
import { TerminusModule } from '@nestjs/terminus';
import { HealthCheckController } from './health-check.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'posts_ms',
      autoLoadEntities: true,
      synchronize: true,
    }),
    PostsModule,
    TerminusModule,
    HttpModule,
  ],
  controllers: [HealthCheckController]
})
export class AppModule {}
