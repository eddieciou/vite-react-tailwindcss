import licenseImage from '@commonImages/license.png';
import { Router } from './router';
import { useNavigate } from 'react-router-dom';
import { PagePathEnum } from './enums/PagePathEnum.ts';
import '@themes';

const App = () => {
  const navigate = useNavigate();

  // const [importedComponent, setImportedComponent] = useState<any>(null);

  // useEffect(() => {
  //   const importComponent = async () => {
  //     let module;
  //     if (process.env.U_VERSION === 'u1') {
  //       module = await import('./env/u1/App');
  //     }
  //
  //     if (process.env.U_VERSION === 'u2') {
  //       module = await import('./env/u2/App');
  //     }
  //
  //     setImportedComponent(module);
  //   };
  //
  //   importComponent();
  // }, []);

  // useEffect(() => {
  //   import(
  //     `../config/${import.meta.env.VITE_U_VERSION}/${import.meta.env.VITE_M_VERSION}/theme.css`
  //   );
  // }, []);

  return (
    <>
      <div className="flex w-full bg-[var(--primary-main-from)]">
        {import.meta.env.VITE_U_VERSION}RRRRGG
        <img
          alt="test"
          src={`/${import.meta.env.VITE_U_VERSION}/${import.meta.env.VITE_M_VERSION}/vite.svg`}
        />
        <img src={licenseImage} alt="license" />
        <div className="flex flex-col gap-2">
          <button
            className="block bg-yellow-500 p-2"
            onClick={() => navigate(PagePathEnum.IndexPage)}
          >
            IndexPage
          </button>
          <button
            className="block bg-yellow-500 p-2"
            onClick={() => navigate(PagePathEnum.VIPGradePage)}
          >
            VIPGradePage
          </button>
        </div>
      </div>
      {/*{importedComponent && <importedComponent.default aa={2} />}*/}
      <Router />
    </>
  );
};

export default App;
