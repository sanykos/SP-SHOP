import { IProduct } from "../../model/Product";

export interface BasketProductCardProps {
  product: IProduct;
  className?: string;
  img: string;
  deleteItemCart: (id: number) => void;
}
