import * as graphql from "@nestjs/graphql";
import { CreateDreamInterpretationInput } from "../dreamInterpretationModule/CreateDreamInterpretationInput";
import { CreateDreamInterpretationOutput } from "../dreamInterpretationModule/CreateDreamInterpretationOutput";
import { DreamInterpretationModuleService } from "./dreaminterpretationmodule.service";

export class DreamInterpretationModuleResolver {
  constructor(protected readonly service: DreamInterpretationModuleService) {}

  @graphql.Mutation(() => CreateDreamInterpretationOutput)
  async CreateDreamInterpretation(
    @graphql.Args()
    args: CreateDreamInterpretationInput
  ): Promise<CreateDreamInterpretationOutput> {
    return this.service.CreateDreamInterpretation(args);
  }
}
