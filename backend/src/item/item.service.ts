import { Injectable } from '@nestjs/common';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { Item } from './item.model';

@Injectable()
export class ItemService {
  constructor(
    @InjectModel(Item)
    private readonly model: ReturnModelType<typeof Item>
  ) {}

  find(filter?: Partial<Item>): Promise<Item[]> {
    return this.model.find(filter).exec();
  }

  findById(id: string): Promise<Item> {
    return this.model.findById(id).exec();
  }

  addItem(item: Item) {
    const newItem = new this.model(item);
    return newItem.save();
  }
}
