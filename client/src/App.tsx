import { useState } from "react";
import "./App.css";
import { VehicleComponent } from "./Components/VehicleComponent";
import { PlayerVehicle } from "./Data/PlayerVehicle";
import { GameServerContextProvider } from "./services/GameServerContextProvider";

function App() {
  return (
    <>
    <GameServerContextProvider>
      <VehicleComponent />
    </GameServerContextProvider>
    </>
  );
}

export default App;
