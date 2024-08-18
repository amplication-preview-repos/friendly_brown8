import { DreamInterpretationCreateNestedManyWithoutDreamRequestsInput } from "./DreamInterpretationCreateNestedManyWithoutDreamRequestsInput";

export type DreamRequestCreateInput = {
  dreamDescription?: string | null;
  dreamInterpretations?: DreamInterpretationCreateNestedManyWithoutDreamRequestsInput;
  user?: string | null;
};
