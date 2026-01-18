import { Level } from '../../generated/prisma/client';

export class CreateHikerDto {
  name: string;
  age: number;
  level: Level;
}
