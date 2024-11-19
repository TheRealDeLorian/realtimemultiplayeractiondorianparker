import { PlayerVehicle } from "../Data/PlayerVehicle";
import { GameServerContextProvider } from "../services/GameServerContextProvider";

export const VehicleComponent = () => {
  vehicle = GameServerContextProvider //dix this l8r
  
  return (
    <div
      style={{
        position: "fixed",
        rotate: `${vehicle.angleindegs}deg`,
        fill: "#999999",
        width: `100px`,
        height: `100px`,
        top: `${vehicle.xpos}px`,
        left: `${vehicle.ypos}px`,
      }}
    >
      <svg
        version="1.1"
        id="Icons"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <g>
          <path
            d="M29.9,17.7C29.9,17.6,29.9,17.6,29.9,17.7c-0.1-0.1-0.1-0.2-0.1-0.2l-4-6C25.6,11.2,25.3,11,25,11h-5c-0.6,0-1,0.4-1,1v8.4
		c-0.8,0.3-1.5,0.9-2,1.6h-2v-2.5c0.1-0.1,0.1-0.2,0.2-0.3l2.7-6.7c0.1-0.3,0.1-0.7-0.1-1c-1.3-1.8-3.4-3.4-5.9-4.4
		C11,6.8,10.1,6.6,9.3,6.4L4,19.2V21c0,0,0,0,0,0c-1.2,0.9-2,2.3-2,4c0,2.8,2.2,5,5,5s5-2.2,5-5c0-0.3,0-0.7-0.1-1h4.2
		C16,24.3,16,24.7,16,25c0,2.8,2.2,5,5,5s5-2.2,5-5h3c0.6,0,1-0.4,1-1v-6C30,17.9,30,17.8,29.9,17.7z M7,28c-1.7,0-3-1.3-3-3
		s1.3-3,3-3s3,1.3,3,3S8.7,28,7,28z M21,13h3.5l2.7,4h-0.9c-1,0-1.9-0.6-2.3-1.4C23.7,15.2,23.4,15,23,15h-2V13z M21,28
		c-1.7,0-3-1.3-3-3s1.3-3,3-3s3,1.3,3,3S22.7,28,21,28z"
          />
          <path d="M3,16.4L7.2,6.1C6.3,6,5.4,6,4.6,6.2C4.2,6.2,3.9,6.5,3.8,6.8l-2.7,6.7c-0.1,0.3-0.1,0.7,0.1,1C1.7,15.2,2.3,15.8,3,16.4z" />
        </g>
      </svg>
    </div>
  );
};
