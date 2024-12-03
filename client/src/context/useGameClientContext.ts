import { createContext, useContext } from "react";
import { PlayerVehicle } from "../Data/PlayerVehicle";

export interface GameClientContextInterface {
  vehicleList: PlayerVehicle[];
  registerVehicle: (vehicle: PlayerVehicle) => void;
}

export const gameClientContext =
  createContext<GameClientContextInterface | null>(null);

export const useGameClientContext = (): GameClientContextInterface => {
  const context = useContext(gameClientContext);

  if (!context) {
    throw new Error(
      "useGameClientContext must be used within a GameClientContextProvider"
    );
  }

  return context;
};
