import { DreamRequestWhereUniqueInput } from "../dreamRequest/DreamRequestWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type DreamInterpretationWhereInput = {
  dreamRequest?: DreamRequestWhereUniqueInput;
  id?: StringFilter;
  imageUrl?: StringNullableFilter;
  interpretation?: StringNullableFilter;
};
