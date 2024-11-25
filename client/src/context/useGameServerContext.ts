import { createContext, useContext } from "react";
import { PlayerVehicle } from "../Data/PlayerVehicle";

export interface GameServerContextInterface {
  vehicle: PlayerVehicle;
  updateVehicle: (
    id: number,
    vehicleAction:
      | "moveForward" // 'w' pressed
      | "moveBackward" // 's' pressed
      | "turnLeft" // 'a' pressed
      | "turnRight" // 'd' pressed
      | "stopForwards" // when user lets go of 'w' key
      | "stopBackwards" // when user lets go of 's' key
      | "stopLeft" // when user lets go of 'a' key
      | "stopRight" // when user lets go of 'd' key) => void;
  ) => void;
}

export const gameServerContext = createContext<GameServerContextInterface>({
  vehicle: {
    //these value are just making ts happy
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: false,
  },
  updateVehicle: () => {},
});



export const useGameServerContext = () => {
  return useContext(gameServerContext);
};
