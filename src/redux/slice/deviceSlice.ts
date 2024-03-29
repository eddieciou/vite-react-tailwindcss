import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export type TDeviceState = {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
};

const initialState: TDeviceState = {
  isMobile: false,
  isTablet: false,
  isDesktop: false,
};

export const deviceSlice = createSlice({
  name: 'device',
  initialState,
  reducers: {
    setIsMobile: (state: TDeviceState, action: PayloadAction<boolean>) => {
      state.isMobile = action.payload;
    },
    setIsTablet: (state: TDeviceState, action: PayloadAction<boolean>) => {
      state.isTablet = action.payload;
    },
    setIsDesktop: (state: TDeviceState, action: PayloadAction<boolean>) => {
      state.isDesktop = action.payload;
    },
  },
});
