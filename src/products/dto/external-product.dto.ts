export interface ExternalProductDto {
    id: string;
    name: string;
    img: string;
    price: number;
    count: number;
    tags: string[];
    description: string;
    createdAt: Array<number>;
    updatedAt: Array<number>;
  }