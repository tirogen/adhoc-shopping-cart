import { ApiProperty } from '@nestjs/swagger';

export class ItemDTO {
  @ApiProperty()
  name: string;
  
  @ApiProperty()
  price: number;
  
  @ApiProperty()
  discount: number;
}
