import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { Item } from '../entities/item.entity';
import { ItemDTO } from './item.dto';
import { ItemService } from './item.service';

@ApiTags('Item')
@Controller('item')
export class ItemController {
  constructor(private readonly service: ItemService) {}

  @Get()
  async findAll(): Promise<Item[]> {
    return this.service.find();
  }

  @Get(':id')
  async findById(@Param('id') id: string): Promise<Item> {
    return this.service.findById(id);
  }

  @Post()
  async addItem(@Body() item: ItemDTO): Promise<Item> {
    return this.service.addItem(item);
  }

  @Put(':id')
  async updateItem(@Param('id') id: string, @Body() item: ItemDTO): Promise<Item> {
    return this.service.updateItem(id, item);
  }

  @Delete(':id')
  async deleteItem(@Param('id') id: string): Promise<boolean> {
    return this.service.deleteItem(id);
  }
}
