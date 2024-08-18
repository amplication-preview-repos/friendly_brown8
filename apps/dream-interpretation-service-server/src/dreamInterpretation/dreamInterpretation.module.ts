import { Module } from "@nestjs/common";
import { DreamInterpretationModuleBase } from "./base/dreamInterpretation.module.base";
import { DreamInterpretationService } from "./dreamInterpretation.service";
import { DreamInterpretationController } from "./dreamInterpretation.controller";
import { DreamInterpretationResolver } from "./dreamInterpretation.resolver";

@Module({
  imports: [DreamInterpretationModuleBase],
  controllers: [DreamInterpretationController],
  providers: [DreamInterpretationService, DreamInterpretationResolver],
  exports: [DreamInterpretationService],
})
export class DreamInterpretationModule {}
