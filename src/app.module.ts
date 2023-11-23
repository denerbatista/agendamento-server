import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EnvironmentsModule } from './environments/environments.module';

@Module({
  imports: [EnvironmentsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
