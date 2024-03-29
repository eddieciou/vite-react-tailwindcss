import { configureStore } from '@reduxjs/toolkit';
import { deviceSlice } from '../slice/deviceSlice.ts';

export const store = configureStore({
  reducer: {
    [deviceSlice.name]: deviceSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

store.subscribe(() => {});
