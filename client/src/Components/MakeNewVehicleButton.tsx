import { useGameServerContext } from "../context/useGameServerContext";
import { PlayerVehicle } from "../Data/PlayerVehicle";

export const MakeNewVehicleButton = () => {
  const { registerVehicle } = useGameServerContext();

  const handleMakeNewVehicle = () => {
    const newVehicle: PlayerVehicle = {
      acceleration: "none",
      angleindegs: 0,
      id: 2,
      isLeft: false,
      isRight: false,
      xpos: Math.floor(Math.random() * window.innerWidth) + 1,
      ypos: Math.floor(Math.random() * window.innerHeight) + 1,
    };
    console.log("xpos: ", newVehicle.xpos);
    registerVehicle(newVehicle);
  };
  return (
    <div>
      <button onClick={handleMakeNewVehicle}>Push to spawn new vehicle</button>
    </div>
  );
};
