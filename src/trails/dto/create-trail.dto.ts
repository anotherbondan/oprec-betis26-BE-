// create-trail.dto.ts
import { Difficulty } from '../../generated/prisma/client';

export class CreateTrailDto {
  name: string;
  difficulty: Difficulty;
  openDate: Date;
  status: boolean;
}
