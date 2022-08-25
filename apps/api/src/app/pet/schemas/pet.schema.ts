import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PetDocument = Pet & Document;

@Schema()
export class Pet {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  kind: string;

  @Prop({ required: true })
  age: number;

}

export const PetSchema = SchemaFactory.createForClass(Pet);