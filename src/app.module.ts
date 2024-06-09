import { Module } from '@nestjs/common';
import { TasModule } from './task/task.module';

@Module({
  imports: [TasModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
