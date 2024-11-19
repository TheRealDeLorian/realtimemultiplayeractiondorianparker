import { PlayerVehicle } from "../Data/PlayerVehicle";

export function moveVehicle(vehicle: PlayerVehicle) {
  const newVehicle = { ...vehicle };
  if (newVehicle.isLeft) {
    newVehicle.angleindegs -= 45;
  }
  if (newVehicle.isRight) {
    newVehicle.angleindegs += 45;
  }
  if (newVehicle.isAccelerating) {
    newVehicle.xpos += Math.round(
      Math.cos((newVehicle.angleindegs * Math.PI) / 180)
    );
    newVehicle.ypos += Math.round(
      Math.sin((newVehicle.angleindegs * Math.PI) / 180)
    );
  }
  return newVehicle;
}
