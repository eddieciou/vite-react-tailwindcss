import { useLocation } from 'react-router-dom';

export const VIPGradePage = () => {
  const location = useLocation();

  return <div>U2 VIPGradePage: {location.pathname}</div>;
};
