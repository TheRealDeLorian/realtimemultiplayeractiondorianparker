import { useState } from "react";
import "./App.css";
import { VehicleComponent } from "./Components/VehicleComponent";
import { PlayerVehicle } from "./Data/PlayerVehicle";

function App() {
  const vehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: false,
  };
  return (
    <>
      <VehicleComponent vehicle={vehicle} />
    </>
  );
}

export default App;
