import { useLocation } from 'react-router-dom';

export const IndexPage = () => {
  const location = useLocation();

  return <div>IndexPage{location.pathname}</div>;
};
