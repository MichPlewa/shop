export interface CreateProductDTO {
  id: string;
  name: string;
  quantity: number;
  category: string;
  price: number;
  topSale: boolean;
  image: string;
  starsRating: number;
}
