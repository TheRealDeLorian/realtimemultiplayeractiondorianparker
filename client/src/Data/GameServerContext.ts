import React from "react";
import { PlayerVehicle } from "./PlayerVehicle";

export interface GameServerContextInterface {
  vehicle: PlayerVehicle;
}

export const GameServerContext = React.createContext<GameServerContextInterface | null>(null)
