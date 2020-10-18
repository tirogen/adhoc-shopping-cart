import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { ItemModule } from './item/item.module';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypegooseModule.forRoot(process.env.MONGO_URL, {
      useNewUrlParser: true,
    }),
    ItemModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
