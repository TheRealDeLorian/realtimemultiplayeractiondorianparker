import React, { ReactNode, useEffect, useState } from "react";
import { PlayerVehicle } from "../Data/PlayerVehicle";
import { gameClientContext } from "../context/useGameClientContext";
import { Buffer } from "buffer";

export const GameClientContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [vehicleList, setVehicleList] = useState<PlayerVehicle[]>([]);

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:5210/ws");

    newSocket.addEventListener("open", () => {
      console.log("WebSocket connection established.");
    });

    newSocket.addEventListener("message", (event) => {
      console.log(event.data);
      const serverVehicles: PlayerVehicle[] = JSON.parse(event.data);

      setVehicleList(serverVehicles);
    });

    setSocket(newSocket);

    return () => {
      console.log("Closing WebSocket connection.");
      newSocket.close();
    };
  }, []);

  const registerVehicle = (vehicle: PlayerVehicle) => {
    console.log("Registering Vehicle:", vehicle);

    setVehicleList((currentList) => {
      const updatedList = [...currentList, vehicle];

      const buffer = Buffer.from(JSON.stringify(updatedList), "utf-8");
      socket?.send(buffer);

      return updatedList;
    });
  };

  return (
    <gameClientContext.Provider value={{ vehicleList, registerVehicle }}>
      {children}
    </gameClientContext.Provider>
  );
};
