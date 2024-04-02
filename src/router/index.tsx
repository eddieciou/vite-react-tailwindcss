import { Route, Routes } from 'react-router-dom';
import { PagePathEnum } from '../enums/PagePathEnum.ts';
import { IndexPage } from '@uVersionContainers/IndexPage';
import { VIPGradePage } from '@uVersionContainers/VIPGradePage';

export const Router = () => {
  return (
    <Routes>
      <Route path={PagePathEnum.IndexPage} element={<IndexPage />} />
      <Route path={PagePathEnum.VIPGradePage} element={<VIPGradePage />} />
    </Routes>
  );
};
