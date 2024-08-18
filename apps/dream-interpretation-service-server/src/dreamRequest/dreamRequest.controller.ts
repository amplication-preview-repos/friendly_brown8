import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { DreamRequestService } from "./dreamRequest.service";
import { DreamRequestControllerBase } from "./base/dreamRequest.controller.base";

@swagger.ApiTags("dreamRequests")
@common.Controller("dreamRequests")
export class DreamRequestController extends DreamRequestControllerBase {
  constructor(protected readonly service: DreamRequestService) {
    super(service);
  }
}
