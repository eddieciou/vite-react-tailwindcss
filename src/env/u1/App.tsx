import { useAppSelector } from '../../redux/hooks';

const App = ({ aa }: { aa: number }) => {
  const { isMobile } = useAppSelector((state) => state.device);

  return (
    <div>
      {aa}
      <div>isMobile = {isMobile ? 'True' : 'False'}</div>
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
