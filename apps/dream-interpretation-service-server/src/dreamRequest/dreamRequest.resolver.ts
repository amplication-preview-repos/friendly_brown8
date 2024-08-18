import * as graphql from "@nestjs/graphql";
import { DreamRequestResolverBase } from "./base/dreamRequest.resolver.base";
import { DreamRequest } from "./base/DreamRequest";
import { DreamRequestService } from "./dreamRequest.service";

@graphql.Resolver(() => DreamRequest)
export class DreamRequestResolver extends DreamRequestResolverBase {
  constructor(protected readonly service: DreamRequestService) {
    super(service);
  }
}
