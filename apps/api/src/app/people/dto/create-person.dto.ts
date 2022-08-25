export class CreatePersonDto {}
import { IsString, IsNumber, IsInt, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

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

}
