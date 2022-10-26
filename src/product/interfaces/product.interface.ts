export interface Product {
  id: string;
  name: string;
  quantity: number;
  category: string;
  price: number;
  topSale: boolean;
  image: string;
  starsRating: number;
  createdAt: Date;
  updatedAt: Date;
}
