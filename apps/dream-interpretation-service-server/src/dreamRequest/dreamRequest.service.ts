import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { DreamRequestServiceBase } from "./base/dreamRequest.service.base";

@Injectable()
export class DreamRequestService extends DreamRequestServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
