import { Component } from '@angular/core';
import { Cylinder } from 'src/app/classes/cylinder';
import { Sphere } from 'src/app/classes/sphere';
import { VolumeVisitor } from 'src/app/classes/volume-visitor';
import { Figure } from 'src/app/interfaces/figure';
import { FigureVisitor } from 'src/app/interfaces/figure-visitor';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  private _figures: Figure[]
  radius: number;

  get figures() {
    return this._figures
  }

  constructor() {
    this._figures = [
      new Sphere(),
      new Cylinder()
    ]
    console.log(this._figures)
  }
  
  onCalculateClick() {
    this._figures = [
      new Sphere(this.radius),
      new Cylinder(this.radius, this.radius) // cylinder height equals its radius
    ]
    const volumeVisitor = new VolumeVisitor()
    this.calculateVolume(this._figures, volumeVisitor)
  }

  private calculateVolume(figures: Figure[], figureVisitor: FigureVisitor) {
    for (const figure of figures) {
      figure.accept(figureVisitor)
    }
  }

  isInputInvalid() {
    return !this.radius ||
        this.radius?.toString().startsWith('0') ||
        this.radius?.toString().startsWith('e') ||
        this.radius?.toString().startsWith('-')
  }
}
