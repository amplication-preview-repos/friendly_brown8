import { Injectable } from "@nestjs/common";
import { CreateDreamInterpretationInput } from "../dreamInterpretationModule/CreateDreamInterpretationInput";
import { CreateDreamInterpretationOutput } from "../dreamInterpretationModule/CreateDreamInterpretationOutput";

@Injectable()
export class DreamInterpretationModuleService {
  constructor() {}
  async CreateDreamInterpretation(args: CreateDreamInterpretationInput): Promise<CreateDreamInterpretationOutput> {
    throw new Error("Not implemented");
  }
}
