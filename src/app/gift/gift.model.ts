import {SizeModel} from "./size.model";

export interface GiftModel {
  id: number;
  categoryId: number;
  name: string;
  code: string;
  category: string;
  description: string;
  imageUri: string;
  stock: number;
  points: number;
  status: string;

  sizes: GiftSizeModel[];
}

export interface GiftSizeModel {
  giftId: number;
  sizeId: number;
  maxLimit: number;
  stock: number;
  status: string;

  size: SizeModel;
}
