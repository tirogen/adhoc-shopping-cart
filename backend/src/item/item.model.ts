import { ApiProperty } from '@nestjs/swagger';
import { prop, mongoose } from '@typegoose/typegoose';

export class Item {
  _id: mongoose.Types.ObjectId;

  @ApiProperty()
  @prop({ required: true })
  title: string;

  @ApiProperty()
  @prop({ required: true })
  price: number;

  @ApiProperty()
  @prop({ required: false })
  bargainPrice: number;
}
