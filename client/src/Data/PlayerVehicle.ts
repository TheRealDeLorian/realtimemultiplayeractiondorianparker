export interface PlayerVehicle {
  id: number;
  xpos: number;
  ypos: number;
  angleindegs: number;
  isLeft: boolean;
  isRight: boolean;
  acceleration: "forwards" | "backwards" | "none";
}
