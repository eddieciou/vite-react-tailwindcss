import { useBreakPoint } from '../../hooks/useBreakPoint.ts';

const App = ({ aa }: { aa: number }) => {
  const { isMobile, isTablet, isDesktop } = useBreakPoint();

  return (
    <div>
      {aa}
      <div>isMobile = {isMobile ? 'True' : 'False'}</div>
      <div>isTablet = {isTablet ? 'True' : 'False'}</div>
      <div>isDesktop = {isDesktop ? 'True' : 'False'}</div>
      <div className="mobile:bg-blue-500 tablet:bg-yellow-500 bg-pink-400">
        Tailwind
      </div>
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
