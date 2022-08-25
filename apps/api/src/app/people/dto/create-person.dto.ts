export class CreatePersonDto {}
import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Pet } from '../../pet/schemas/pet.schema';
import { isTypedArray } from 'util/types';

export class CreateAppointmentDTO {
  
  @IsString()
  @ApiProperty()
  readonly rut: string;

  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly lastName: string;
    
  @IsInt()
  @ApiProperty()
  readonly age: number;
    
  @IsString()
  @ApiProperty()
  readonly address: string;

  @ApiProperty()
  readonly pets: Pet[];

}
