import { StringNullableFilter } from "../../util/StringNullableFilter";
import { DreamInterpretationListRelationFilter } from "../dreamInterpretation/DreamInterpretationListRelationFilter";
import { StringFilter } from "../../util/StringFilter";

export type DreamRequestWhereInput = {
  dreamDescription?: StringNullableFilter;
  dreamInterpretations?: DreamInterpretationListRelationFilter;
  id?: StringFilter;
  user?: StringNullableFilter;
};
