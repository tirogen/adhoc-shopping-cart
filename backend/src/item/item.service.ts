import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Item } from '../entities/item.entity';
import { ItemDTO } from './item.dto';

@Injectable()
export class ItemService {
  constructor(
    @InjectRepository(Item)
    private readonly repository: Repository<Item>
  ) {}

  async find(filter?: Partial<Item>): Promise<Item[]> {
    return this.repository.find();
  }

  async findById(id: string): Promise<Item> {
    return this.repository.findOne(id);
  }

  async addItem(item: ItemDTO): Promise<Item> {
    this.validateItemDTO(item);
    const newItem: Item = this.repository.create({
      name: item.name,
      price: item.price,
      discount: item.discount,
      finalPrice: item.price * (100 - item.discount) / 100
    })
    return this.repository.save(newItem);
  }

  async updateItem(id: string, itemDto: ItemDTO): Promise<Item> {
    const item: Item = await this.repository.findOne(id);
    item.name = itemDto.name;
    item.price = itemDto.price;
    item.discount = itemDto.discount;
    item.finalPrice = itemDto.price * (100 - itemDto.discount) / 100;
    return this.repository.save(item);
  }

  async deleteItem(id: string): Promise<boolean> {
    await this.repository.delete({ id });
    return true;
  }

  private validateItemDTO(item: ItemDTO): void {
    if (!("name" in item) || !("price" in item) || !("discount" in item)) throw new BadRequestException("Some field is missing");
    if (item.name.length === 0) throw new BadRequestException("Item name cannot be empty");
    if (item.price <= 0) throw new BadRequestException("Price cannot be negative");
    if (item.discount < 0 || item.discount > 100) throw new BadRequestException("Discount must be within 0-100");
  }
}
