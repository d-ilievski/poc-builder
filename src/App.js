import './App.css';
import Builder from './components/Builder';
import { BuilderProvider } from './global/BuilderContext';

function App() {
  return (
    <div className='App'>
      <BuilderProvider>
        <Builder />
      </BuilderProvider>
    </div>
  );
}

export default App;
