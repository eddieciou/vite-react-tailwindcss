import { useEffect } from 'react';
import licenseImage from '../commonImages/license.png';

function App() {
  useEffect(() => {
    import(
      `../config/${process.env.U_VERSION}/${process.env.M_VERSION}/theme.css`
    );
  }, []);

  return (
    <>
      <div className="flex w-full bg-[var(--primary-main-from)]">
        {process.env.U_VERSION}RRRRGG
        <img
          alt="test"
          src={`/${process.env.U_VERSION}/${process.env.M_VERSION}/vite.svg`}
        />
        <img src={licenseImage} alt="license" />
      </div>
    </>
  );
}

export default App;
