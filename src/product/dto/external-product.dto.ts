export interface ExternalProductDTO {
  id: string;
  name: string;
  quantity: number;
  category: string;
  price: number;
  image: string;
  starsRating: number;
  createdAt: Array<number>;
  updatedAt: Array<number>;
}
