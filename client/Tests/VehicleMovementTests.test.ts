import { expect, test } from "vitest";
import { moveVehicle } from "../src/logic/vehicleUtils";
import { PlayerVehicle } from "../src/Data/PlayerVehicle";

test("Creates a vehicle", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: false,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: false,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

test("Turn left", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: true,
    isRight: false,
    isAccelerating: false,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: -45,
    isLeft: true,
    isRight: false,
    isAccelerating: false,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

test("Turn right", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: true,
    isAccelerating: false,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 45,
    isLeft: false,
    isRight: true,
    isAccelerating: false,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

test("No turn", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: false,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: false,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

test("accelerate on x axis", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 101,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

test("accelerate on y axis", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 90,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 101,
    angleindegs: 90,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

test("accelerate on 45 degree angle", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 45,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 101,
    ypos: 101,
    angleindegs: 45,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

test("accelerate on 225 degree angle", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 225,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 99,
    ypos: 99,
    angleindegs: 225,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

test("accelerate on -45 degree angle", () => {
  const playerVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: -45,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 101,
    ypos: 99,
    angleindegs: -45,
    isLeft: false,
    isRight: false,
    isAccelerating: true,
  };

  expect(moveVehicle(playerVehicle)).toEqual(expectedVehicle);
});

