import {Category} from "./categories.model";

export interface DisplayCardModel {
  imageUrl: string[];
  title: string;
  description: string;
  startDate?: Date;
  category?: Category;
  type: string;
  learnMore?: boolean;
  endDate?: Date;
}
