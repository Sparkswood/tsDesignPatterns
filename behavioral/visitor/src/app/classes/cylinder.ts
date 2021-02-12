import { Figure } from "../interfaces/figure";
import { FigureVisitor } from "../interfaces/figure-visitor";

export class Cylinder implements Figure {
  
  iconPath = 'assets/svg/cylinder.svg'
  volume: number
  radius: number
  height: number

  constructor(
    radius?: number,
    height?: number
  ) {
    this.radius = radius || 0
    this.height = height || 0
  }

  accept(volumeVisitor: FigureVisitor): void {
    volumeVisitor.cylinderVolume(this)
  }
}
