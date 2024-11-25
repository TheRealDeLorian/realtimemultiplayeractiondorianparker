import { useEffect } from "react";
import { useGameServerContext } from "../context/useGameServerContext";

export const PlayerControls = () => {
  //update vehicle with
  const { updateVehicle, vehicle } = useGameServerContext();

  useEffect(() => {
    //needs to clean up event listeners
    const moveForward = function (event: KeyboardEvent) {
      if (event.key == "w") {
        updateVehicle(1, "moveForward");
      }
    };
    window.addEventListener("keydown", moveForward);

    const stopForwards = function (event: KeyboardEvent) {
      if (event.key == "w") {
        updateVehicle(1, "stopForwards");
      }
    };
    window.addEventListener("keyup", stopForwards);

    const moveBackwards = function (event: KeyboardEvent) {
      if (event.key == "s") {
        updateVehicle(1, "moveBackward");
      }
    };
    window.addEventListener("keydown", moveBackwards);

    const stopBackwards = function (event: KeyboardEvent) {
      if (event.key == "s") {
        updateVehicle(1, "stopBackwards");
      }
    };
    window.addEventListener("keyup", stopBackwards);

    const turnLeft = function (event: KeyboardEvent) {
      if (event.key == "a") {
        updateVehicle(1, "turnLeft");
      }
    };
    window.addEventListener("keydown", turnLeft);

    const stopLeft = function (event: KeyboardEvent) {
      if (event.key == "a") {
        updateVehicle(1, "stopLeft");
      }
    };
    window.addEventListener("keyup", stopLeft);

    const turnRight = function (event: KeyboardEvent) {
      if (event.key == "d") {
        updateVehicle(1, "turnRight");
      }
    };
    window.addEventListener("keydown", turnRight);

    const stopRight = function (event: KeyboardEvent) {
      if (event.key == "d") {
        updateVehicle(1, "stopRight");
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
  }, [vehicle]);

  return <div></div>;
  //context donw by monday and started infinite loop
};
