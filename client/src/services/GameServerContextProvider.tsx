//expose the current vehicle and this function to update a vehicle.

import React, { ReactNode, useState } from "react";
import { GameServerContext } from "../Data/GameServerContext";
import { PlayerVehicle } from "../Data/PlayerVehicle";
import { moveVehicle } from "../logic/vehicleUtils";

export const GameServerContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [vehicle, setVehicle] = useState<PlayerVehicle>({
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: false,
  });

  const updateVehicle = (
    id: number,
    vehicleAction:
      | "moveForward" // 'w' pressed
      | "moveBackward" // 's' pressed
      | "turnLeft" // 'a' pressed
      | "turnRight" // 'd' pressed
      | "stopForwards" // when user lets go of 'w' key
      | "stopBackwards" // when user lets go of 's' key
      | "stopLeft" // when user lets go of 'a' key
      | "stopRight" // when user lets go of 'd' key
  ) => {
    const newVehicle = {...vehicle}
    switch (vehicleAction) {
      case "moveForward":
        newVehicle.isAccelerating = true
        break; // 'w' pressed
      case "moveBackward":
        newVehicle.isAccelerating = true
        break; // 's' pressed
      case "turnLeft":
        newVehicle.isRight = false
        newVehicle.isLeft = true
        break; // 'a' pressed
      case "turnRight":
        newVehicle.isLeft = false
        newVehicle.isRight = true
        break; // 'd' pressed
      case "stopForwards":
        newVehicle.isAccelerating = false
        break; // when user lets go of 'w' key
      case "stopBackwards":
        newVehicle.isAccelerating = false
        break; // when user lets go of 's' key
      case "stopLeft":
        newVehicle.isLeft = false
        break; // when user lets go of 'a' key
      case "stopRight":
        newVehicle.isRight = false
        break; // when user lets go of 'd' key
    }
    return vehicle;
  };

  return (
    <GameServerContext.Provider value={{vehicle}}>
      {children}
    </GameServerContext.Provider>
  );
};