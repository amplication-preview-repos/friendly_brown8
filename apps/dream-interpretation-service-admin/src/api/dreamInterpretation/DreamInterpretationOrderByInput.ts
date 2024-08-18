import { SortOrder } from "../../util/SortOrder";

export type DreamInterpretationOrderByInput = {
  createdAt?: SortOrder;
  dreamRequestId?: SortOrder;
  id?: SortOrder;
  imageUrl?: SortOrder;
  interpretation?: SortOrder;
  updatedAt?: SortOrder;
};
