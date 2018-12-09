export class Dimension {
  discrete?: number;
  min?: number;
  max?: number;
}

export class Dimensions {
  width: Dimension;
  height: Dimension;
  depth: Dimension;
}
