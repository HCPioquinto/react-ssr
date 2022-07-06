import './App.css';
import MainPage from 'components/layout/MainPage';
import MainProvider from 'context';

function App() {
  return (
    <div className="App">
      <MainProvider>
        <MainPage />
      </MainProvider>
    </div>
  );
}

export default App;
