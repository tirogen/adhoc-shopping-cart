import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Item } from './item.model';
import { ItemService } from './item.service';

@ApiTags('Item')
@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.service.find();
  }

  @Get(':id')
  findById(@Param('id') id: string): Promise<Item> {
    return this.service.findById(id);
  }

  @Post()
  addItem(@Body() item: Item) {
    return this.service.addItem(item);
  }
}
