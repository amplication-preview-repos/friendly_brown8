import { Module } from "@nestjs/common";
import { DreamInterpretationModuleService } from "./dreaminterpretationmodule.service";
import { DreamInterpretationModuleController } from "./dreaminterpretationmodule.controller";
import { DreamInterpretationModuleResolver } from "./dreaminterpretationmodule.resolver";

@Module({
  controllers: [DreamInterpretationModuleController],
  providers: [DreamInterpretationModuleService, DreamInterpretationModuleResolver],
  exports: [DreamInterpretationModuleService],
})
export class DreamInterpretationModuleModule {}
