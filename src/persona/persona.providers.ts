import { DataSource } from 'typeorm';
import { Persona } from './persona.entity';

export const personaProviders = [
  {
    provide: 'PERSONA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Persona),
    inject: ['DATA_SOURCE'],
  },
];
