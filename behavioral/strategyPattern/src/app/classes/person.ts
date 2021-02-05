import { Workout } from "../interfaces/workout";

export class Person {
  workout: Workout

  constructor(workout: Workout) {
    this.workout = workout
  }

  todayWorkout(): string {
    return this.workout.todayWorkout()
  }

}
