import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Persona } from './persona.entity';

@Injectable()
export class PersonaService {
  constructor(
    @Inject('PERSONA_REPOSITORY')
    private personaRepository: Repository<Persona>,
  ) {}

  async findAll(): Promise<Persona[]> {
    return this.personaRepository.find();
  }
}
