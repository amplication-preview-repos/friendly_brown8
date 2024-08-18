import { SortOrder } from "../../util/SortOrder";

export type DreamRequestOrderByInput = {
  createdAt?: SortOrder;
  dreamDescription?: SortOrder;
  id?: SortOrder;
  updatedAt?: SortOrder;
  user?: SortOrder;
};
