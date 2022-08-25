import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Delete,
  HttpStatus,
  Res,
  NotFoundException,
  Put,
} from '@nestjs/common';
import { PetService } from './pet.service';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';

@Controller('pet')
export class PetController {
  constructor(private readonly petService: PetService) {}

  @Post()
  async createPet(
    @Res() res,
    @Body() createPetDTO: CreatePetDto,
  ) {
    const pet = await this.petService.createPet(
      createPetDTO,
    );
    return res.status(HttpStatus.OK).json({
      message: 'Pet Successfully Created',
      pet,
    });
  }


  @Get()
  async getPets(@Res() res) {
    const pet = await this.petService.getPets();
    return res.status(HttpStatus.OK).json(pet);
  }


  @Get('/:id')
  async getPet(@Res() res, @Param('id') id) {
    const pet = await this.petService.getPet(id);
    if (!pet)
      throw new NotFoundException('Pet does not exist!');
    return res.status(HttpStatus.OK).json(pet);
  }


  @Delete('/:id')
  async deletePet(@Res() res, @Param('id') id) {
    const pet = await this.petService.deletePet(id);
    if (!pet)
      throw new NotFoundException('Pet does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Pet Deleted Successfully',
      pet,
    });
  }


  @Put('/:id')
  async updatePet(
    @Res() res,
    @Body() updatePetDTO: UpdatePetDto,
    @Param('id') id,
  ) {
    const pet = await this.petService.updatePet(
      id,
      updatePetDTO,
    );
    if (!pet)
      throw new NotFoundException('Pet does not exist!');
    return res.status(HttpStatus.OK).json({
      message: 'Pet Updated Successfully',
      pet,
    });
  }

  /* @Post()
  create(@Body() createPetDto: CreatePetDto) {
    return this.petService.create(createPetDto);
  }

  @Get()
  findAll() {
    return this.petService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.petService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePetDto: UpdatePetDto) {
    return this.petService.update(+id, updatePetDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.petService.remove(+id);
  } */
}
