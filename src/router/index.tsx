import { Route, Routes } from 'react-router-dom';
import { PagePathEnum } from '../enums/PagePathEnum.ts';
import { IndexPage } from '../containers/IndexPage';
import { VIPGradePage } from '../containers/VIPGradePage';

export const Router = () => {
  return (
    <Routes>
      <Route path={PagePathEnum.IndexPage} element={<IndexPage />} />
      <Route path={PagePathEnum.VIPGradePage} element={<VIPGradePage />} />
    </Routes>
  );
};
