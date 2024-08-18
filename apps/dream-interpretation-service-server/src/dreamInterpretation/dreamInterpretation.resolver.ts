import * as graphql from "@nestjs/graphql";
import { DreamInterpretationResolverBase } from "./base/dreamInterpretation.resolver.base";
import { DreamInterpretation } from "./base/DreamInterpretation";
import { DreamInterpretationService } from "./dreamInterpretation.service";

@graphql.Resolver(() => DreamInterpretation)
export class DreamInterpretationResolver extends DreamInterpretationResolverBase {
  constructor(protected readonly service: DreamInterpretationService) {
    super(service);
  }
}
