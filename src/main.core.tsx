import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { DeviceWrapper } from './containers/DeviceWrapper';
import { BrowserRouter } from 'react-router-dom';

interface IMainCoreProps {
  children: React.ReactNode;
}

export const MainCore = ({ children }: IMainCoreProps) => {
  return (
    <Provider store={store}>
      <DeviceWrapper>
        <BrowserRouter basename="/">{children}</BrowserRouter>
      </DeviceWrapper>
    </Provider>
  );
};
