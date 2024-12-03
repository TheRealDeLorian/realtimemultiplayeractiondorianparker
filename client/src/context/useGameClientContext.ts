import { createContext, useContext } from "react";
import { PlayerVehicle } from "../Data/PlayerVehicle";

export interface GameClientContextInterface {
  vehicleList: PlayerVehicle[];
  registerVehicle: (vehicle: PlayerVehicle) => void;
}

export const gameClientContext = createContext<GameClientContextInterface>({
  vehicleList: [
    {
      //these value are just making ts happy
      id: 1,
      xpos: 100,
      ypos: 100,
      angleindegs: 0,
      isLeft: false,
      isRight: false,
      acceleration: "none",
    },
  ],
  registerVehicle: () => {},
});

export const useGameClientContext = () => {
  return useContext(gameClientContext);
};
