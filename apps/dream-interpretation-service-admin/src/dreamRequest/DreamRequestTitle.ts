import { DreamRequest as TDreamRequest } from "../api/dreamRequest/DreamRequest";

export const DREAMREQUEST_TITLE_FIELD = "user";

export const DreamRequestTitle = (record: TDreamRequest): string => {
  return record.user?.toString() || String(record.id);
};
