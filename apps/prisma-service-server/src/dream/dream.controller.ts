import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { DreamService } from "./dream.service";
import { DreamControllerBase } from "./base/dream.controller.base";

@swagger.ApiTags("dreams")
@common.Controller("dreams")
export class DreamController extends DreamControllerBase {
  constructor(
    protected readonly service: DreamService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
