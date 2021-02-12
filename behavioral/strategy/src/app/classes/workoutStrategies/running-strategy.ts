import { Workout } from "src/app/interfaces/workout";

export class RunningStrategy implements Workout{
  iconPath = 'assets/svg/running.svg'
  todayWorkout() {
    return 'Run, Forest run!'
  }
}
