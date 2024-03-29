import { useEffect, useState } from 'react';
import licenseImage from '@commonImages/license.png';

const App = () => {
  const [importedComponent, setImportedComponent] = useState<any>(null);

  useEffect(() => {
    const importComponent = async () => {
      let module;
      if (process.env.U_VERSION === 'u1') {
        module = await import('./env/u1/App');
      }

      if (process.env.U_VERSION === 'u2') {
        module = await import('./env/u2/App');
      }

      setImportedComponent(module);
    };

    importComponent();
  }, []);

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
      {importedComponent && <importedComponent.default aa={2} />}
    </>
  );
};

export default App;
