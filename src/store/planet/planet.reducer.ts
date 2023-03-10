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

type CurrentPlanet =
  | 'Mercury'
  | 'Venus'
  | 'Earth'
  | 'Mars'
  | 'Jupiter'
  | 'Saturn'
  | 'Neptune';

type CurrentInfo = 'planet' | 'structure' | 'surface';

type InitialState = {
  planets: Planet[];
  currentPlanet: CurrentPlanet;
  currentInfo: CurrentInfo;
};

const PLANET_INITIAL_STATE: InitialState = {
  planets: [],
  currentPlanet: 'Mercury',
  currentInfo: 'planet',
};

export const planetSlice = createSlice({
  name: 'planet',
  initialState: PLANET_INITIAL_STATE,
  reducers: {
    setPlanets: (state, action: PayloadAction<Planet[]>) => {
      state.planets = action.payload;
    },
    setCurrentPlanet: (state, action: PayloadAction<CurrentPlanet>) => {
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
