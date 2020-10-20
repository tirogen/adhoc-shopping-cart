import { Module } from '@nestjs/common';
import { Item } from '../entities/item.entity';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([Item])],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
