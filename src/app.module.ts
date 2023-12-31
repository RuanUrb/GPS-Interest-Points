import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InterestPoint } from './app.entity';

@Module({
  imports: [TypeOrmModule.forRoot({type: 'sqlite', database: 'db.sqlite', entities: [InterestPoint], synchronize: true}), TypeOrmModule.forFeature([InterestPoint])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
