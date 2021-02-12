import { FigureVisitor } from "../interfaces/figure-visitor";
import { Cylinder } from "./cylinder";
import { Sphere } from "./sphere";


export class VolumeVisitor implements FigureVisitor {
  sphereVolume(figure: Sphere): void {
    const volume = 4 / 3 * Math.PI * Math.pow(figure.radius, 3)
    figure.volume = Math.round((volume + 2) * 100) / 100
  }

  cylinderVolume(figure: Cylinder): void {
    const volume = Math.PI * Math.pow(figure.radius, 2) * figure.height;
    figure.volume = Math.round((volume + 2) * 100) / 100
  }
}
