import { DreamRequestWhereInput } from "./DreamRequestWhereInput";
import { DreamRequestOrderByInput } from "./DreamRequestOrderByInput";

export type DreamRequestFindManyArgs = {
  where?: DreamRequestWhereInput;
  orderBy?: Array<DreamRequestOrderByInput>;
  skip?: number;
  take?: number;
};
