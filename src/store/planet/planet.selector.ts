import { createSelector } from '@reduxjs/toolkit';
import { RootState } from '../store';
import { Info } from './planet.reducer';

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

export const selectCurrentInfo = createSelector(
  [selectPlanetReducer, selectCurrentPlanet],
  (reducer, planet) => {
    let planetInfo = {};
    switch (reducer.currentInfo) {
      case 'overview':
        planetInfo = planet.overview;
        break;
      case 'structure':
        planetInfo = planet.structure;
        break;
      case 'geology':
        planetInfo = planet.geology;
        break;
      default:
        break;
    }
    return planetInfo as Info;
  }
);
