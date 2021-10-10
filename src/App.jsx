import Routers from './routes';
import CreateGlobalStyle  from './style/globalStyle';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routers />
        <CreateGlobalStyle />
      </header>
    </div>
  );
}

export default App;
