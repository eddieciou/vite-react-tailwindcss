import { useBreakPoint } from '../../hooks/useBreakPoint.ts';

const App = ({ aa }: { aa: number }) => {
  const { isMobile, isTablet, isDesktop } = useBreakPoint();

  return (
    <div>
      {aa}
      <div>isMobile = {isMobile ? 'True' : 'False'}</div>
      <div>isTablet = {isTablet ? 'True' : 'False'}</div>
      <div>isDesktop = {isDesktop ? 'True' : 'False'}</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
      <div>U1 APP</div>
    </div>
  );
};

export default App;
