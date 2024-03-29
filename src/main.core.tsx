import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { DeviceWrapper } from './containers/DeviceWrapper';

interface IMainCoreProps {
  children: React.ReactNode;
}

export const MainCore = ({ children }: IMainCoreProps) => {
  return (
    <Provider store={store}>
      <DeviceWrapper>{children}</DeviceWrapper>
    </Provider>
  );
};
