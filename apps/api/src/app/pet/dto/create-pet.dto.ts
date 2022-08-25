export class CreatePetDto {}
import { IsString, IsInt } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDTO {

  @IsString()
  @ApiProperty()
  readonly name: string;

  @IsString()
  @ApiProperty()
  readonly kind: string;
    
  @IsInt()
  @ApiProperty()
  readonly age: number;

}