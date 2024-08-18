import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DreamServiceBase } from "./base/dream.service.base";

@Injectable()
export class DreamService extends DreamServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
