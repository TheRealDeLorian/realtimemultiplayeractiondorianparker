//expose the current vehicle and this function to update a vehicle.

import React, { ReactNode, useEffect, useState } from "react";
import { PlayerVehicle } from "../Data/PlayerVehicle";
import { gameServerContext } from "../context/useGameServerContext";
import { moveVehicle } from "../logic/vehicleUtils";
import { Buffer } from "buffer";

const accelerationSpeed: number = 5;
const turningSpeed: number = 5;
const tickInterval: number = 10;

export const GameServerContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [socket, setSocket] = useState<WebSocket | undefined>(undefined);

  useEffect(() => {
    const newSocket = new WebSocket("ws://localhost:5210/ws");
    setSocket(newSocket);
    newSocket.addEventListener("open", () => {
      console.log("connected to server");
    });

    newSocket.addEventListener("message", (event) => {
      console.log(event.data);
      const serverVehicles: PlayerVehicle[] = JSON.parse(event.data);

      setVehicleList(serverVehicles);
    });
  }, []);

  const [vehicleList, setVehicleList] = useState<PlayerVehicle[]>([
    {
      acceleration: "none",
      angleindegs: 0,
      id: 1,
      isLeft: false,
      isRight: false,
      xpos: 100,
      ypos: 100,
    },
  ]);

  const registerVehicle = (vehicle: PlayerVehicle) => {
    console.log("Registering Vehicle");
    setVehicleList((oldVehicles) => [...oldVehicles, vehicle]);
  };

  const updateVehicle = (
    id: number,
    vehicleAction:
      | "moveForward" // 'w' pressed
      | "moveBackward" // 's' pressed
      | "turnLeft" // 'a' pressed
      | "turnRight" // 'd' pressed
      | "stopForwards" // when user lets go of 'w' key
      | "stopBackwards" // when user lets go of 's' key
      | "stopLeft" // when user lets go of 'a' key
      | "stopRight" // when user lets go of 'd' key
  ) => {
    setVehicleList((oldVehicle) => {
      const updatedVehicles = oldVehicle.map((v) => {
        if (v.id === id) {
          const updatedVehicle = { ...v };

          switch (vehicleAction) {
            case "moveForward":
              updatedVehicle.acceleration = "forwards";
              break;
            case "moveBackward":
              updatedVehicle.acceleration = "backwards";
              break;
            case "turnLeft":
              updatedVehicle.isRight = false;
              updatedVehicle.isLeft = true;
              break;
            case "turnRight":
              updatedVehicle.isLeft = false;
              updatedVehicle.isRight = true;
              break;
            case "stopForwards":
            case "stopBackwards":
              updatedVehicle.acceleration = "none";
              break;
            case "stopLeft":
              updatedVehicle.isLeft = false;
              break;
            case "stopRight":
              updatedVehicle.isRight = false;
              break;
            default:
              console.warn("Unknown vehicleAction: ", vehicleAction);
          }
          return updatedVehicle;
        }
        return v;
      });
      //broadcast message
      return updatedVehicles; // Update the state with the new array
    });
  };

  useEffect(() => {
    const loop = () => {
      setTimeout(() => {
        setVehicleList((x) => {
          const state = x.map((y) => moveVehicle(y));
          console.log("state: ", state);
          const buffer = Buffer.from(JSON.stringify(state));
          if (socket && socket.readyState) {
            socket.send(buffer);
          }
          return state;
        });
        loop();
      }),
        tickInterval;
    };
    loop();
  }, [socket]);

  return (
    <gameServerContext.Provider
      value={{ vehicleList, updateVehicle, registerVehicle }}
    >
      {children}
    </gameServerContext.Provider>
  );
};
