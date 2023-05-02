import './App.css';
import { Layout } from './components/common/Layout';

export function loader() {
  console.log('soy el loader');
}

function App() {
  return <Layout />;
}

export default App;
