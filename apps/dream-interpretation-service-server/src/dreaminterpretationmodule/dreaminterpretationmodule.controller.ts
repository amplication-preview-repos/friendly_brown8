import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { DreamInterpretationModuleService } from "./dreaminterpretationmodule.service";
import { CreateDreamInterpretationInput } from "../dreamInterpretationModule/CreateDreamInterpretationInput";
import { CreateDreamInterpretationOutput } from "../dreamInterpretationModule/CreateDreamInterpretationOutput";

@swagger.ApiTags("dreamInterpretationModules")
@common.Controller("dreamInterpretationModules")
export class DreamInterpretationModuleController {
  constructor(protected readonly service: DreamInterpretationModuleService) {}

  @common.Post("/dream-interpretations")
  @swagger.ApiOkResponse({
    type: CreateDreamInterpretationOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async CreateDreamInterpretation(
    @common.Body()
    body: CreateDreamInterpretationInput
  ): Promise<CreateDreamInterpretationOutput> {
        return this.service.CreateDreamInterpretation(body);
      }
}
