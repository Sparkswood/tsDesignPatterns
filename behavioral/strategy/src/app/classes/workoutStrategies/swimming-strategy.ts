import { Workout } from "src/app/interfaces/workout";

export class SwimmingStrategy implements Workout{
  iconPath = 'assets/svg/swimming.svg'
  todayWorkout(): string {
    return 'Let\'s swim!'
  }
}
