import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';

const selectPlanetReducer = (state: RootState) => state.planet;

export const selectPlanets = createSelector(
  [selectPlanetReducer],
  (planet) => planet.planets
);

export const selectCurrentPlanet = createSelector(
  [selectPlanetReducer],
  (planet) =>
    planet.planets[
      planet.planets.findIndex(
        (findPlanet) => findPlanet.name === planet.currentPlanet
      )
    ]
);
