import { Workout } from "src/app/interfaces/workout";

export class GymStrategy implements Workout {
  iconPath = 'assets/svg/gym.svg'
  todayWorkout() { 
    return 'Lift some weight!'
  }
}
