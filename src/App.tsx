import './App.css';
import { Layout } from './components/common/Layout';

import { InicioPage } from './components/pages/InicioPage';

export function loader() {
  console.log('soy el loader');
}

function App() {
  return (
    <Layout>
      <InicioPage />
    </Layout>
  );
}

export default App;
