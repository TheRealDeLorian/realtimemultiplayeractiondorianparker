import { useState } from "react";
import "./App.css";
import { MakeNewVehicleButton } from "./Components/MakeNewVehicleButton";
import { ServerVehicleComponent } from "./Components/ServerVehicleComponent";
import { GameClientContextProvider } from "./services/GameClientContextProvider";
import { GameServerContextProvider } from "./services/GameServerContextProvider";
import { ClientVehicleComponent } from "./Components/ClientVehicleComponent";

type AppMode = "idle" | "client" | "server";

function App() {
  const [mode, setMode] = useState<AppMode>("idle");

  const renderIdleScreen = () => (
    <div>
      <button onClick={() => setMode("client")}>Be a client</button>
      <button onClick={() => setMode("server")}>Be a server</button>
    </div>
  );

  const renderClientMode = () => (
    <GameClientContextProvider>
      <div>
        <ClientVehicleComponent />
        <MakeNewVehicleButton />
        <button onClick={() => setMode("idle")}>Back</button>
      </div>
    </GameClientContextProvider>
  );

  const renderServerMode = () => (
    <GameServerContextProvider>
      <div>
        <ServerVehicleComponent />
        <button onClick={() => setMode("idle")}>Back</button>
      </div>
    </GameServerContextProvider>
  );

  return (
    <>
      {mode === "idle" && renderIdleScreen()}
      {mode === "client" && renderClientMode()}
      {mode === "server" && renderServerMode()}
    </>
  );
}

export default App;
