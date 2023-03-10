import { combineReducers } from '@reduxjs/toolkit';

import { planetReducer } from './planet/planet.reducer';

const rootReducer = combineReducers({ planet: planetReducer });

export default rootReducer;
