import { useLocation } from 'react-router-dom';

export const VIPGradePage = () => {
  const location = useLocation();

  return <div>VIPGradePage: {location.pathname}</div>;
};
