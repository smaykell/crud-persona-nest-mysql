import { Module } from '@nestjs/common';
import { BasedatosModule } from './basedatos/basedatos.module';
import { PersonaModule } from './persona/persona.module';

@Module({
  imports: [BasedatosModule, PersonaModule],
})
export class AppModule {}
