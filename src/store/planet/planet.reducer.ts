import { createSlice, PayloadAction } from '@reduxjs/toolkit';

type Info = {
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
  name: string;
  overview: Info[];
  structure: Info[];
  geology: Info[];
  rotation: string;
  revolution: string;
  radius: string;
  temperature: string;
  images: Image;
  sizes: Size;
};

type InitialState = {
  planets: Planet[];
  currentPlanet: string;
  currentInfo: string;
};

const PLANET_INITIAL_STATE: InitialState = {
  planets: [],
  currentPlanet: 'Mars',
  currentInfo: 'planet',
};

export const planetSlice = createSlice({
  name: 'planet',
  initialState: PLANET_INITIAL_STATE,
  reducers: {
    setPlanets: (state, action: PayloadAction<Planet[]>) => {
      state.planets = action.payload;
    },
  },
});

export const { setPlanets } = planetSlice.actions;

export const planetReducer = planetSlice.reducer;
