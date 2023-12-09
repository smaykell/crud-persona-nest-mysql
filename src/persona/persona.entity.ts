import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ length: 50 })
  apellidoPaterno: string;

  @Column({ length: 50 })
  apellidoMaterno: string;

  @Column({ length: 50 })
  nombres: string;
}
