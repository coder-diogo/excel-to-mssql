import { Module } from '@nestjs/common';
import { Page1Module } from './page1/page1.module';

@Module({
  imports: [Page1Module],
})
export class AppModule {}
