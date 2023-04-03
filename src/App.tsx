import './App.css';
import { InicioPage } from './components/pages/InicioPage';
// import { Prueba } from './components/Prueba';

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
