import {configureStore} from '@reduxjs/toolkit';
import rootReducers from './Reducers/Index';
export const store = configureStore({
  reducer: rootReducers,
});
