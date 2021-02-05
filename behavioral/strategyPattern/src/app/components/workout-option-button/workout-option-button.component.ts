import { Component, Input, OnInit } from '@angular/core';
import { Workout } from 'src/app/interfaces/workout';

@Component({
  selector: 'app-workout-option-button',
  templateUrl: './workout-option-button.component.html',
  styleUrls: ['./workout-option-button.component.scss'],
})
export class WorkoutOptionButtonComponent implements OnInit {

  @Input() workout: Workout;

  constructor() { }

  ngOnInit() {}

}
