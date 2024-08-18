import { DreamInterpretation } from "../dreamInterpretation/DreamInterpretation";

export type DreamRequest = {
  createdAt: Date;
  dreamDescription: string | null;
  dreamInterpretations?: Array<DreamInterpretation>;
  id: string;
  updatedAt: Date;
  user: string | null;
};
