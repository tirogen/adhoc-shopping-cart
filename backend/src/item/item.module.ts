import { Module } from '@nestjs/common';
import { Item } from './item.model';
import { ItemService } from './item.service';
import { ItemController } from './item.controller';
import { TypegooseModule } from 'nestjs-typegoose';

@Module({
  imports: [
    TypegooseModule.forFeature([
      {
        typegooseClass: Item,
        schemaOptions: { timestamps: true },
      },
    ]),
  ],
  providers: [ItemService],
  controllers: [ItemController],
})
export class ItemModule {}
