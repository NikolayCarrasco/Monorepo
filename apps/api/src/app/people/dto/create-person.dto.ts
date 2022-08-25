export class CreatePersonDto {}
import { IsString, IsNumber, IsInt, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAppointmentDTO {
    
  @IsString()
  @ApiProperty()
  readonly name: string;
    
  @IsInt()
  @MaxLength(100, {
    message: 'input incorrecto ',
  })
  @ApiProperty()
  readonly age: number;
    
  @IsString()
  @ApiProperty()
  readonly rut: string;

}
