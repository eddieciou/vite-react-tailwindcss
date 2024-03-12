function App() {
  return (
    <>
      <div className="flex w-full bg-pink-400">
        {process.env.U_VERSION}RRRR
        <img
          alt="test"
          src={`/${process.env.U_VERSION}/${process.env.M_VERSION}/vite.svg`}
        />
      </div>
    </>
  );
}

export default App;
