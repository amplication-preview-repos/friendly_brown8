import { DreamRequestWhereUniqueInput } from "../dreamRequest/DreamRequestWhereUniqueInput";

export type DreamInterpretationCreateInput = {
  dreamRequest?: DreamRequestWhereUniqueInput | null;
  imageUrl?: string | null;
  interpretation?: string | null;
};
