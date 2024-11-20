import { Key, useEffect } from "react";
import { useGameServerContext } from "../context/useGameServerContext";
import { moveVehicle } from "../logic/vehicleUtils";

export const PlayerControls = () => { //update vehicle with 
  const { updateVehicle, vehicle } = useGameServerContext();
  
  useEffect(() => { //needs to clean up event listeners
    const moveForward = function (event: KeyboardEvent) {
      if (event.code == "KeyW") {
        updateVehicle(1, "moveForward");
        //console.log(event);
      }
    }
    window.addEventListener("keydown", moveForward);
    const stopForwards = function (event: KeyboardEvent) {
      if (event.code == "KeyW") {
        updateVehicle(1, "stopForwards");
        console.log(event);
      }
    }
    window.addEventListener("keyup", stopForwards);

    return () => {
      window.removeEventListener("keydown", moveForward),
      window.removeEventListener("keyup", stopForwards)
    }
  }, [vehicle]);

  //remove eventlistener on unmount

  return <div></div>;
  //context donw by monday and started infinite loop
};
