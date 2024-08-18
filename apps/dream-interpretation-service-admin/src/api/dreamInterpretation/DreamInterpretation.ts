import { DreamRequest } from "../dreamRequest/DreamRequest";

export type DreamInterpretation = {
  createdAt: Date;
  dreamRequest?: DreamRequest | null;
  id: string;
  imageUrl: string | null;
  interpretation: string | null;
  updatedAt: Date;
};
