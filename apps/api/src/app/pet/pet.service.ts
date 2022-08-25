import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreatePetDto } from './dto/create-pet.dto';
import { UpdatePetDto } from './dto/update-pet.dto';
import { Pet, PetDocument } from './schemas/pet.schema';

@Injectable()
export class PetService {

  constructor(
    @InjectModel(Pet.name) private petModel: Model<PetDocument>,
    ) {}

    async createPet(
      createPetDTO: CreatePetDto,
    ): Promise<Pet> {
      const newPet = new this.petModel(createPetDTO);
      return newPet.save();
    }
  
    async getPets(): Promise<Pet[]> {
      const pets = await this.petModel.find();
      return pets;
    }
  
    async getPet(id: string): Promise<Pet> {
      const pet = await this.petModel.findById(id);
      return pet;
    }
  
    async deletePet(id: string): Promise<any> {
      const pet = await this.petModel.findByIdAndDelete(id);
      return pet;
    }
  
    async updatePet(
      id: string,
      updatePetDTO: UpdatePetDto,
    ): Promise<Pet> {
      const updatedPet = await this.petModel
        .findByIdAndUpdate(id, { $set: updatePetDTO }, { new: true })
        .exec();
      return updatedPet;
    }

  /* create(createPetDto: CreatePetDto) {
    return 'This action adds a new pet';
  }

  findAll() {
    return `This action returns all pet`;
  }

  findOne(id: number) {
    return `This action returns a #${id} pet`;
  }

  update(id: number, updatePetDto: UpdatePetDto) {
    return `This action updates a #${id} pet`;
  }

  remove(id: number) {
    return `This action removes a #${id} pet`;
  } */
}
