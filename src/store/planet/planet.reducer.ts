import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type PlanetList =
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Neptune';

export type Info = {
  content: string;
  source: string;
};

type Image = {
  planet: string;
  internal: string;
  geology: string;
};

type Size = {
  mobile: number;
  tablet: number;
  desktop: number;
};

type Planet = {
  name: PlanetList;
  overview: Info[];
  structure: Info[];
  geology: Info[];
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Image;
  sizes: Size;
  color: string;
};

export type CurrentInfo = 'overview' | 'structure' | 'geology';

type InitialState = {
  planets: Planet[];
  currentPlanet: PlanetList;
  currentInfo: CurrentInfo;
};

const PLANET_INITIAL_STATE: InitialState = {
  planets: [],
  currentPlanet: 'Mercury',
  currentInfo: 'overview',
};

export const planetSlice = createSlice({
  name: 'planet',
  initialState: PLANET_INITIAL_STATE,
  reducers: {
    setPlanets: (state, action: PayloadAction<Planet[]>) => {
      state.planets = action.payload;
    },
    setCurrentPlanet: (state, action: PayloadAction<PlanetList>) => {
      state.currentPlanet = action.payload;
    },
    setCurrentInfo: (state, action: PayloadAction<CurrentInfo>) => {
      state.currentInfo = action.payload;
    },
  },
});

export const { setPlanets, setCurrentPlanet, setCurrentInfo } =
  planetSlice.actions;

export const planetReducer = planetSlice.reducer;
