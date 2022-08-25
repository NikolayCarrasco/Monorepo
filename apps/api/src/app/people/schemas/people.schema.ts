import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type PeopleDocument = People & Document;

@Schema()
export class People {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  age: number;

  @Prop({ required: true })
  rut: string;
}

export const PeopleSchema = SchemaFactory.createForClass(People);