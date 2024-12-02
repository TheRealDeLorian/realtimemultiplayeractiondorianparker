import "./App.css";
import { MakeNewVehicleButton } from "./Components/MakeNewVehicleButton";
import { VehicleComponent } from "./Components/VehicleComponent";

import { GameServerContextProvider } from "./services/GameServerContextProvider";

function App() {
  return (
    <>
      <GameServerContextProvider>
        <MakeNewVehicleButton />
        <VehicleComponent />
      </GameServerContextProvider>
    </>
  );
}

export default App;
