import { FC, useEffect } from "react";
import { useGameServerContext } from "../context/useGameServerContext";
import { PlayerVehicle } from "../Data/PlayerVehicle";

interface props {
  id: number;
}

export const PlayerControls: FC<props> = ({ id }) => {
  const { updateVehicle, vehicleList, registerVehicle } = useGameServerContext();
  //if vehcile isnt in the list
  //register it
  if (!vehicleList.find(x => x.id === id))
  {
    const newVehicle: PlayerVehicle = {
      acceleration: "none",
      angleindegs: 0,
      id: id,
      isLeft: false,
      isRight: false,
      xpos: Math.floor(Math.random() * window.innerWidth) + 1,
      ypos: Math.floor(Math.random() * window.innerHeight) + 1
    } 
    registerVehicle(newVehicle);
  }
  useEffect(() => {
    const moveForward = function (event: KeyboardEvent) {
      if (event.key == "w") {
        updateVehicle(id, "moveForward");
      }
    };
    window.addEventListener("keydown", moveForward);

    const stopForwards = function (event: KeyboardEvent) {
      if (event.key == "w") {
        updateVehicle(id, "stopForwards");
      }
    };
    window.addEventListener("keyup", stopForwards);

    const moveBackwards = function (event: KeyboardEvent) {
      if (event.key == "s") {
        updateVehicle(id, "moveBackward");
      }
    };
    window.addEventListener("keydown", moveBackwards);

    const stopBackwards = function (event: KeyboardEvent) {
      if (event.key == "s") {
        updateVehicle(id, "stopBackwards");
      }
    };
    window.addEventListener("keyup", stopBackwards);

    const turnLeft = function (event: KeyboardEvent) {
      if (event.key == "a") {
        updateVehicle(id, "turnLeft");
      }
    };
    window.addEventListener("keydown", turnLeft);

    const stopLeft = function (event: KeyboardEvent) {
      if (event.key == "a") {
        updateVehicle(id, "stopLeft");
      }
    };
    window.addEventListener("keyup", stopLeft);

    const turnRight = function (event: KeyboardEvent) {
      if (event.key == "d") {
        updateVehicle(id, "turnRight");
      }
    };
    window.addEventListener("keydown", turnRight);

    const stopRight = function (event: KeyboardEvent) {
      if (event.key == "d") {
        updateVehicle(id, "stopRight");
      }
    };
    window.addEventListener("keyup", stopRight);

    return () => {
      window.removeEventListener("keydown", moveForward),
        window.removeEventListener("keyup", stopForwards);
      window.removeEventListener("keydown", moveBackwards);
      window.removeEventListener("keyup", stopBackwards);
      window.removeEventListener("keydown", turnLeft);
      window.removeEventListener("keyup", stopLeft);
      window.removeEventListener("keydown", turnRight);
      window.removeEventListener("keyup", stopRight);
    };
  }, [vehicleList]);

  return <div></div>;
};
