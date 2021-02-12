import { FigureVisitor } from "./figure-visitor";

export interface Figure {
  iconPath: string
  volume: number
  
  accept(volumeVisitor: FigureVisitor): void;
}
