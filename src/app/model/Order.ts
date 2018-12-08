export class Item {
  name: string;
  material: string;
  surfacefinish: string;
  width: number;
  height: number;
  depth: number;
  items: Item[];
}

export class Order {
  _id: string;
  items: Item[];
}
