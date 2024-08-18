import { Module } from "@nestjs/common";
import { DreamRequestModuleBase } from "./base/dreamRequest.module.base";
import { DreamRequestService } from "./dreamRequest.service";
import { DreamRequestController } from "./dreamRequest.controller";
import { DreamRequestResolver } from "./dreamRequest.resolver";

@Module({
  imports: [DreamRequestModuleBase],
  controllers: [DreamRequestController],
  providers: [DreamRequestService, DreamRequestResolver],
  exports: [DreamRequestService],
})
export class DreamRequestModule {}
