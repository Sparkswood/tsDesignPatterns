import { Figure } from "../interfaces/figure";
import { FigureVisitor } from "../interfaces/figure-visitor";

export class Sphere implements Figure{

  iconPath = 'assets/svg/sphere.svg'
  volume: number
  radius: number

  constructor(
    radius?: number
  ) {
    this.radius = radius || 0
  }

  accept(volumeVisitor: FigureVisitor): void {
    volumeVisitor.sphereVolume(this)
  }
}
