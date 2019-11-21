import { Module } from '@nestjs/common';
import { Page1Module } from './page1/page1.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './config/typeorm.config';

@Module({
  imports: [TypeOrmModule.forRoot(typeOrmConfig), Page1Module],
})
export class AppModule {}
