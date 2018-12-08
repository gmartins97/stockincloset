import {Dimensions} from './Dimension';
export class Product {
  id?: number;
  name: string;
  categoryDescription: string;
  dimensions: Dimensions;
  parts: string[];
  materialNames: string[];
  minOccupancyPercentage: number;
  maxOccupancyPercentage: number;
}
