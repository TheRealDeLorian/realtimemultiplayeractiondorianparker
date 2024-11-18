import { expect, test } from 'vitest'
import { moveVehicle } from '../src/logic/vehicleUtils'
import { PlayerVehicle } from '../src/Data/PlayerVehicle'



test('Creates a vehicle', () => { 
  const playerVehicle: PlayerVehicle = {
  id: 1,
  xpos: 100,
  ypos: 100,
  angleindegs: 0,
  isLeft: false,
  isRight: false,
  isAccelerating: false
  }

  const expectedVehicle: PlayerVehicle = {
    id: 1,
    xpos: 100,
    ypos: 100,
    angleindegs: 0,
    isLeft: false,
    isRight: false,
    isAccelerating: false
    }

  
  expect(moveVehicle(playerVehicle) ) 
})