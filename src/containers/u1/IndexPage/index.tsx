import { useLocation } from 'react-router-dom';

export const IndexPage = () => {
  const location = useLocation();

  return <div>U1 IndexPage{location.pathname}</div>;
};
