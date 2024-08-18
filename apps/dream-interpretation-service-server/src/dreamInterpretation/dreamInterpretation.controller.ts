import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DreamInterpretationService } from "./dreamInterpretation.service";
import { DreamInterpretationControllerBase } from "./base/dreamInterpretation.controller.base";

@swagger.ApiTags("dreamInterpretations")
@common.Controller("dreamInterpretations")
export class DreamInterpretationController extends DreamInterpretationControllerBase {
  constructor(protected readonly service: DreamInterpretationService) {
    super(service);
  }
}
