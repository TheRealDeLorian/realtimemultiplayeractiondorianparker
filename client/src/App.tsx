import { useState } from "react";
import "./App.css";
import { MakeNewVehicleButton } from "./Components/MakeNewVehicleButton";
import { ServerVehicleComponent } from "./Components/ServerVehicleComponent";
import { GameClientContextProvider } from "./services/GameClientContextProvider";

import { GameServerContextProvider } from "./services/GameServerContextProvider";
import { ClientVehicleComponent } from "./Components/ClientVehicleComponent";

function App() {
  const [isClient, setIsClient] = useState(false);
  const [isServer, setIsServer] = useState(false);

  return (
    <>
      {!isClient && !isServer && (
        <div>
          <button onClick={() => setIsClient(true)}>Be a client</button>
          <button onClick={() => setIsServer(true)}>Be a server</button>
        </div>
      )}
      {isClient && !isServer && (
        <div>
          <GameClientContextProvider>
            <ClientVehicleComponent />
            <MakeNewVehicleButton />
          </GameClientContextProvider>
        </div>
      )}
      {!isClient && isServer && (
        <div>
          <GameServerContextProvider>
            <ServerVehicleComponent />
          </GameServerContextProvider>
        </div>
      )}
    </>
  );
}

export default App;
