import { Module } from '@nestjs/common';
import { BasedatosModule } from 'src/basedatos/basedatos.module';
import { personaProviders } from './persona.providers';
import { PersonaService } from './persona.service';
import { PersonaController } from './persona.controller';

@Module({
  imports: [BasedatosModule],
  providers: [...personaProviders, PersonaService],
  controllers: [PersonaController],
})
export class PersonaModule {}
