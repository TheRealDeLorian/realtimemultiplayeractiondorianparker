import "./App.css";
import { VehicleComponent } from "./Components/VehicleComponent";
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
