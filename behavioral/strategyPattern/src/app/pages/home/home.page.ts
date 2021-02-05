import { Component, OnInit } from '@angular/core';
import { SwimmingStrategy } from 'src/app/classes/workoutStrategies/swimming-strategy';
import { Person } from 'src/app/classes/person';
import { Workout } from 'src/app/interfaces/workout';
import { GymStrategy } from 'src/app/classes/workoutStrategies/gym-strategy';
import { RunningStrategy } from 'src/app/classes/workoutStrategies/running-strategy';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  private _workoutTypes: Workout[]

  get workoutTypes() {
    return this._workoutTypes
  }

  constructor(
    private alertController: AlertController
  ) {
    this._workoutTypes = [
      new SwimmingStrategy(),
      new GymStrategy(),
      new RunningStrategy()
    ]
  }

  ngOnInit() {}

  onWorkoutOptionClick(strategy: Workout) {
    const newPerson = new Person(strategy)
    this.presentAlert(newPerson.todayWorkout())
  }

  async presentAlert(header: string) {
    const alert = await this.alertController.create({
      cssClass: 'workout-option-alert',
      header: header,
      buttons: ['OK']
    });

    await alert.present();
  }

}
