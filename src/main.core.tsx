import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';

interface IMainCoreProps {
  children: React.ReactNode;
}

export const MainCore = ({ children }: IMainCoreProps) => {
  return <Provider store={store}>{children}</Provider>;
};
