import { useGameClientContext } from "../context/useGameClientContext";
import { PlayerVehicle } from "../Data/PlayerVehicle";

export const MakeNewVehicleButton = () => {
  const { registerVehicle } = useGameClientContext();

  const handleMakeNewVehicle = () => {
    const newVehicle: PlayerVehicle = {
      acceleration: "none",
      angleindegs: 0,
      id: Math.floor(Math.random() * 1000),
      isLeft: false,
      isRight: false,
      xpos: Math.floor(Math.random() * window.innerWidth) + 1,
      ypos: Math.floor(Math.random() * window.innerHeight) + 1,
    };
    registerVehicle(newVehicle);
  };
  return (
    <div>
      <button onClick={handleMakeNewVehicle}>Push to spawn new vehicle</button>
    </div>
  );
};
