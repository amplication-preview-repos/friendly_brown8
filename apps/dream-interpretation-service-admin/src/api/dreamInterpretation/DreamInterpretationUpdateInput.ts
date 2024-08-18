import { DreamRequestWhereUniqueInput } from "../dreamRequest/DreamRequestWhereUniqueInput";

export type DreamInterpretationUpdateInput = {
  dreamRequest?: DreamRequestWhereUniqueInput | null;
  imageUrl?: string | null;
  interpretation?: string | null;
};
