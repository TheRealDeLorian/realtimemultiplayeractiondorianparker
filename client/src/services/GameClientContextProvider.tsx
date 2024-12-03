import { ReactNode, useState } from "react";
import { PlayerVehicle } from "../Data/PlayerVehicle";
import { gameClientContext } from "../context/useGameClientContext";

export const GameClientContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<WebSocket | undefined>(undefined);
  const [vehicleList, setVehicleList] = useState<PlayerVehicle[]>([]);

  useState(() => {
    const newSocket = new WebSocket("ws://localhost:5210/ws");
    setSocket(socket);
    newSocket.addEventListener("message", (event) => {
      const returnObj = JSON.parse(event.data);

      setVehicleList(returnObj);
      console.log("New list: ", vehicleList);
    });
  });

  const registerVehicle = (vehicle: PlayerVehicle) => {
    console.log("Registering Vehicle");
    setVehicleList((oldVehicles) => [...oldVehicles, vehicle]);
  };

  return (
    <gameClientContext.Provider value={{ vehicleList, registerVehicle }}>
      {children}
    </gameClientContext.Provider>
  );
};
