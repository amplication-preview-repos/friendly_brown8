import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { DreamModuleBase } from "./base/dream.module.base";
import { DreamService } from "./dream.service";
import { DreamController } from "./dream.controller";
import { DreamResolver } from "./dream.resolver";

@Module({
  imports: [DreamModuleBase, forwardRef(() => AuthModule)],
  controllers: [DreamController],
  providers: [DreamService, DreamResolver],
  exports: [DreamService],
})
export class DreamModule {}
