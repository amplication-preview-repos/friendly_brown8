import { DreamInterpretationUpdateManyWithoutDreamRequestsInput } from "./DreamInterpretationUpdateManyWithoutDreamRequestsInput";

export type DreamRequestUpdateInput = {
  dreamDescription?: string | null;
  dreamInterpretations?: DreamInterpretationUpdateManyWithoutDreamRequestsInput;
  user?: string | null;
};
