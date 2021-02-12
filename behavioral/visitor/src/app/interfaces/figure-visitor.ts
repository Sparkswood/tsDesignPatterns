import { Cylinder } from "../classes/cylinder";
import { Sphere } from "../classes/sphere";

export interface FigureVisitor {
  sphereVolume(figure: Sphere): void;

  cylinderVolume(figure: Cylinder): void;
}
