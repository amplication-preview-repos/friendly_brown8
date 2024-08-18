import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DreamInterpretationServiceBase } from "./base/dreamInterpretation.service.base";

@Injectable()
export class DreamInterpretationService extends DreamInterpretationServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
