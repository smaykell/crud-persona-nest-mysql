import { Controller, Get } from "@nestjs/common";
import { PersonaService } from "./persona.service";
import { Persona } from "./persona.entity";

@Controller("persona")
export class PersonaController {
  constructor(private personaService: PersonaService) {}

  @Get()
  async findAll(): Promise<Persona[]> {
    return this.personaService.findAll();
  }
}
