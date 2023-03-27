import './App.css';
import InicioPage from './components/pages/InicioPage';

export function loader() {
  console.log('soy el loader');
}

function App() {
  return (
    <>
      <InicioPage />
    </>
  );
}

export default App;
