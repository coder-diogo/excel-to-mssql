import { Module } from '@nestjs/common';
import { Page1Controller } from './page1.controller';
import { Page1Service } from './page1.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Page1Repository } from './page1.repository';

@Module({
  imports: [TypeOrmModule.forFeature([Page1Repository])],
  controllers: [Page1Controller],
  providers: [Page1Service],
})
export class Page1Module { }
