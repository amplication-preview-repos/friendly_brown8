import { DreamInterpretation as TDreamInterpretation } from "../api/dreamInterpretation/DreamInterpretation";

export const DREAMINTERPRETATION_TITLE_FIELD = "imageUrl";

export const DreamInterpretationTitle = (
  record: TDreamInterpretation
): string => {
  return record.imageUrl?.toString() || String(record.id);
};
